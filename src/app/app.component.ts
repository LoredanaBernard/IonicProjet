import { Component, ViewChild } from '@angular/core';
import { Platform , Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import *as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilAnimalPage } from '../pages/profil-animal/profil-animal';
import { ModifAnimalPage } from '../pages/modif-animal/modif-animal';
import { AjoutAnimal1Page } from '../pages/ajoutAnimal/ajout-animal1/ajout-animal1';
import { AjoutAnimal2Page } from '../pages/ajoutAnimal/ajout-animal2/ajout-animal2';
import { AjoutAnimal3Page } from '../pages/ajoutAnimal/ajout-animal3/ajout-animal3';
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


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      events.subscribe('user:created', (user, time) => {
        this.userHome = user;
        console.log('Welcome', user, 'at', time);
      });
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
}

public openHome(){
  this.nav.setRoot(HomePage,{user: this.userHome});
}
public openProfil(){
  this.nav.setRoot(ProfilPage,{user: this.userHome});
}
  
}
