import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location : any = [];
  dataLoaded = false;
  defaultZoom:number = 18;
  startPin = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
  mapStyle = [{"elementType": "geometry", "stylers": [{"color": "#f5f5f5"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"} ] }, {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"} ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#ffffff"} ] }, {"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"} ] }, {"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] }, {"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#c9c9c9"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] } ];
  availableCars: any = [];
  constructor(public navCtrl: NavController, public geoLocation: Geolocation, public dataProvider: DataProvider) {
  }
  ionViewWillEnter() {
    this.dataProvider.getCurrentCordinates()
      .then((res:boolean) => {
      this.dataLoaded = res;
      });
    this.availableCars = this.dataProvider.getAvailableCars();
  }
}
