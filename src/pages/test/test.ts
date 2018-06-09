import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, public platform: Platform) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    //let map: GoogleMap = this.googleMaps.create(element);
    console.log('Map.create()');

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
 /*   map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
      }
    );*/

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map', mapOptions);
    
    // create LatLng object
   /* let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

    // create CameraPosition
    let position: CameraPosition<any> = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    map.addMarker(markerOptions)
    .then((marker: Marker) => {
        marker.showInfoWindow();
    });*/
}
}
