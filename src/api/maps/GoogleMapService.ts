import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

export interface GCircle {
  center:{lat:number, lng:number}
  radius:number
}

window['mapsApi$'] = new BehaviorSubject({ready:false})

window['mapsApiReady'] = function(){
  window['mapsApi$'].next({ready:true})
  window['mapsApi$'].complete()
}


@Injectable()
export class GoogleMapService {

  apiKey:string = null

  apiReady:boolean = false
  loadingApi:boolean = false
  mapsApi$:BehaviorSubject<{ready:boolean, error?:any}>

  constructor(){
    this.mapsApi$ = window['mapsApi$']
    this.mapsApi$.subscribe((gMapApi)=>{
      if(gMapApi != null){
        this.apiReady = true
      }
    })
  }

  loadApi() {
    if(!this.loadingApi){
      this.loadingApi = true
      let url:string
      if(this.apiKey){
        url = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=mapsApiReady`
      } else {
        url = `https://maps.googleapis.com/maps/api/js?callback=mapsApiReady`
      }
      this.addScript(url);
    }
  }

  addScript(url, callback?) {
    var script = document.createElement('script');
    if (callback) {
      script.onload = callback;
    }
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
  }

}