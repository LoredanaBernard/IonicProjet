import { Component, ViewChild } from '@angular/core';
import { Platform , Nav, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import *as firebase from 'firebase';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';


import { HomePage } from '../pages/home/home';

import { SplashPage } from '../pages/splashScreen/splash/splash';
import { ConnexionPage } from '../pages/connexion/connexion';
import { User } from '../model/User';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ConnexionPage;
  userHome : User;

  @ViewChild(Nav) private nav: Nav;


  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              public events: Events,
              public menuCtrl: MenuController,
              private oneSignal: OneSignal) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      events.subscribe('user:created', (user, time) => {
        this.userHome = user;
        console.log('Welcome', user, 'at', time);
      });

      this.oneSignal.startInit('384f8632-0c3e-4e55-acb9-f58bf68aa4aa', '968396793810');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

      
    });  
    

    var config = {
      apiKey: "AIzaSyBQtDwKs4I5WtfrM7g6uf6kgpUqXY__VtU",
      authDomain: "ionic-d7a2f.firebaseapp.com",
      databaseURL: "https://ionic-d7a2f.firebaseio.com",
      projectId: "ionic-d7a2f",
      storageBucket: "ionic-d7a2f.appspot.com",
      messagingSenderId: "968396793810"
    };
    firebase.initializeApp(config);
    var storage = firebase.storage();
    
  }

  public openConnexion() {
    this.nav.setRoot(ConnexionPage,{user: this.userHome});
    this.menuCtrl.close();
}

public openHome(){
  this.nav.setRoot('HomePage',{user: this.userHome});
  this.menuCtrl.close();
}
public openProfil(){
  this.nav.setRoot('ProfilPage',{user: this.userHome});
  this.menuCtrl.close();
}

public openAnnonces(){
  this.nav.setRoot('AnnoncesPage',{user: this.userHome});
  this.menuCtrl.close();
}
public openVeto(){
  this.nav.setRoot('VeterinairePage',{user: this.userHome});
  this.menuCtrl.close();
}

public openInfo(){
  this.nav.setRoot('InformationsPage',{user: this.userHome});
  this.menuCtrl.close();
}

public openParam(){
  this.nav.setRoot('ParametresPage',{user: this.userHome});
  this.menuCtrl.close();
}

public openMessages(){
  this.nav.setRoot('MessagesPage',{user: this.userHome});
  this.menuCtrl.close();
}

  
}
