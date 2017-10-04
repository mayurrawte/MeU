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
    {'id': '45sdf4', 'model': 'BMW Mini', 'rate': '100', 'thumb': 'assets/images/car-1.png'},
    {'id': 'fsdsd2', 'model': 'TATA SUMO', 'rate': '100', 'thumb': 'assets/images/car-2.png'},
    {'id': '342sd', 'model': 'Suzuki', 'rate': '100', 'thumb': 'assets/images/car-3.png'},
    {'id': '34dsf', 'model': 'F1', 'rate': '100', 'thumb': 'assets/images/car-4.png'},
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
  getAvailableCars() {
    return this.availableCars;
  }

}
