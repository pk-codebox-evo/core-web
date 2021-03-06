import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RoutingService} from './routing-service';
import {Observable, Observer} from 'rxjs/Rx';
import {DotcmsConfig} from './system/dotcms-config';
import {LoginService} from './login-service';
import {DotRouterService} from './dot-router-service';

@Injectable()
export class RoutingPrivateAuthService implements CanActivate {
    constructor(private router: DotRouterService, private routingService: RoutingService,
             private loginService: LoginService, private dotcmsConfig: DotcmsConfig) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.create(obs => {
            this.loginService.isLogin$.subscribe(isLogin => {
                if (isLogin) {
                    this.dotcmsConfig.getConfig().subscribe(configParams => {
                        if (state.url.indexOf('home') > -1) {
                            if (this.routingService.firstPortlet) {
                                this.goToFirstPortlet(obs);
                            } else {
                                this.routingService.menusChange$.subscribe(res => {
                                    this.goToFirstPortlet(obs);
                                });
                            }
                        } else {
                            this.checkAccess(state.url).subscribe(checkAccess => {
                                if (!checkAccess) {
                                    this.router.goToMain();
                                }
                                obs.next(checkAccess);
                            });
                        }
                    });
                } else {
                    this.router.goToLogin();
                    obs.next(false);
                }
            });
        }).take(1);
    }

    private goToFirstPortlet(obs: Observer<boolean>): void {
        // TODO update this condition when we have more than one angular porlet
        this.router.goToURL(this.routingService.firstPortlet === 'rules' ? 'rules' : `/c/${this.routingService.firstPortlet}`);
        obs.next(false);
    }

    private checkAccess(url: string): Observable<boolean> {
        return Observable.create(obs => {
            if (this.routingService.currentMenu) {
                obs.next(this.check(url));
            } else {
                this.routingService.menusChange$.subscribe(() => obs.next(this.check(url)));
            }
        }).take(1);
    }

    private check(url: string): boolean {
        let isRouteLoaded = true;
        if (url !== '/c/pl') {
            isRouteLoaded = this.routingService.isPortlet(url);

            if (isRouteLoaded) {
                this.routingService.setCurrentPortlet(url);
            } else {
                this.router.goToLogin();
            }
        }
        return isRouteLoaded;
    }
}