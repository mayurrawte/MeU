import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Geolocation} from "@ionic-native/geolocation";
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  availableCars = [
    {'id': '45sdf4', 'model': 'BMW', 'rate': '100', 'thumb': ''},
    {'id': 'fsdsd2', 'model': 'TATA SUMO', 'rate': '100', 'thumb': ''},
    {'id': '342sd', 'model': 'BMW', 'rate': '100', 'thumb': ''},
    {'id': '34dsf', 'model': 'BMW', 'rate': '100', 'thumb': ''},
  ];
  currentLocation:any = [];
  constructor(public http: Http, public geoLocation: Geolocation) {
    console.log('Hello DataProvider Provider');
  }

  getCurrentCordinates() {
    return new Promise((resolve, reject) => {
      this.geoLocation.getCurrentPosition()
        .then((response) => {
          this.currentLocation.latitude = response.coords.latitude;
          this.currentLocation.longitude = response.coords.longitude;
          resolve(true);
        }).catch((res) => {
        console.log(res);
      });
    });
  }

}
