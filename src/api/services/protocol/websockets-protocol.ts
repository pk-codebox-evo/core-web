import _ from 'lodash';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {LoggerService} from '../logger.service';
import {Protocol, Url} from './protocol';
import {Observable} from 'rxjs/Rx';

export class WebSocketProtocol extends Protocol {
    private sendQueue = [];

    private readyStateConstants = {
        'CONNECTING': 0,
        'OPEN': 1,
        'CLOSING': 2,
        'CLOSED': 3,
        'RECONNECT_ABORTED': 4
    };

    private normalCloseCode = 1000;
    private reconnectableStatusCodes = [4000];
    private socket: WebSocket;
    private dataStream: Subject<any>;
    private internalConnectionState: number;
    private reconnectIfNotNormalClose: boolean;

    constructor(private url: Url, loggerService: LoggerService, config?: WebSocketConfig, private protocols?: Array<string> ) {
        super(loggerService, config);

        let match = new RegExp('wss?:\/\/').test(url.url);
        if (!match) {
            throw new Error('Invalid url provided [' + url.url + ']');
        }
        this.reconnectIfNotNormalClose = config && config.reconnectIfNotNormalClose ? config.reconnectIfNotNormalClose : false;
        this.dataStream = new Subject();
    }

    connect(force = false): void {
        let self = this;
        if (force || !this.socket || this.socket.readyState !== this.readyStateConstants.OPEN) {
            this.loggerService.debug('Connecting with Web socket', this.url.url);
            try {
                self.socket = this.protocols ? new WebSocket(this.url.url, this.protocols) : new WebSocket(this.url.url);

                self.socket.onopen = (ev: Event) => {
                    this.loggerService.debug('Web EventsSocket connection opened', ev, this.count);
                    this._open.next(ev);
                };

                self.socket.onmessage = (ev: MessageEvent) => {
                    this.loggerService.debug('Message:', ev, this.count);
                    this._message.next(JSON.parse(ev.data));
                };

                this.socket.onclose = (ev: CloseEvent) => {
                    this.loggerService.debug('Web EventsSocket connection closed', ev, this.count);
                    if ((this.reconnectIfNotNormalClose && ev.code !== this.normalCloseCode) || this.reconnectableStatusCodes.indexOf(ev.code) > -1) {
                        this.loggerService.debug('Reconnecting Web EventsSocket connection');
                        this.reconnect();
                    } else {
                        this._close.next(ev);
                        this._message.complete();
                    }
                };

                this.socket.onerror = (ev: ErrorEvent) => {
                    this.loggerService.debug('Web EventsSocket connection error', ev, this.count);
                    this._error.next(ev);
                };
            }catch (error) {
                this.loggerService.debug('Web EventsSocket connection error', error);
                this._error.next(error);
            }
        }
    }

    send(data): void {
        let self = this;
        if (this.getReadyState() !== this.readyStateConstants.OPEN && this.getReadyState() !== this.readyStateConstants.CONNECTING) {
            this.connect();
        }
        // TODO: change this for an observer
        return new Promise((resolve, reject) => {
            if (self.socket.readyState === self.readyStateConstants.RECONNECT_ABORTED) {
                reject('EventsSocket connection has been closed');
            } else {
                self.sendQueue.push({message: data});
                self.fireQueue();
            }
        });
    }

    fireQueue(): void {
        while (this.sendQueue.length && this.socket.readyState === this.readyStateConstants.OPEN) {
            let data = this.sendQueue.shift();

            this.socket.send(
                _.isString(data.message) ? data.message : JSON.stringify(data.message)
            );
            data.deferred.resolve();
        }
    }

    close(force: boolean): WebSocketProtocol {
        if (force || !this.socket.bufferedAmount) {
            this.socket.close();
        }
        return this;
    }

    setInternalState(state): void {
        if (Math.floor(state) !== state || state < 0 || state > 4) {
            throw new Error('state must be an integer between 0 and 4, got: ' + state);
        }

        this.internalConnectionState = state;

    }

    /**
     * Could be -1 if not initzialized yet
     * @returns {number}
     */
    getReadyState(): number {
        if (this.socket == null) {
            return -1;
        }

        return this.internalConnectionState || this.socket.readyState;
    }

    start(): void {
        this.connect();
    }

    destroy(): void {
        this.loggerService.debug('Closing Web EventsSocket');
        this.close(true);
    }
}

export interface WebSocketConfig {
    initialTimeout?: number;
    maxTimeout?: number;
    reconnectIfNotNormalClose?: boolean;
}