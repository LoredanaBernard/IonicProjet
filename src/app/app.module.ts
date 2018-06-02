import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { OneSignal } from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';

import { ModifAnimalPage } from '../pages/modif-animal/modif-animal';

import { SplashPage } from '../pages/splashScreen/splash/splash';
import { ConnexionPage } from '../pages/connexion/connexion';





@NgModule({
  declarations: [
    MyApp,
    ConnexionPage,
    ModifAnimalPage,
    SplashPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnexionPage,
    ModifAnimalPage,
    SplashPage,
   
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Geolocation,
    GoogleMaps,
    OneSignal
  ]
})
export class AppModule {}
