import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { User } from '../../model/User';
import { Events } from 'ionic-angular';

import *as firebase from 'firebase';
import { Page } from 'ionic-angular/navigation/nav-util';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  readonly TAG:String ='HomePage';
  ref : firebase.database.Reference;
  public  user: User;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public events: Events) {
    this.user = navParams.get("user");
    this.ref= firebase.database().ref('User/'+ this.user.id);
    console.log(`${this.TAG} utilisateur : ${this.user.id}`);
    this.events.publish('user:created', this.user, Date.now());
   // this.navCtrl.setRoot(HomePage);
             
                // Récupération de l'utilisateur dans BDD
             this.ref.on('value',PassSnapShot =>{
                this.user.id = PassSnapShot.val().util;
              });

              console.log(`${this.TAG} prenom : ${this.user.prenom}`); 
              console.log(`${this.TAG} id : ${this.user.id}`); 
             

  }

  openMenu(){
    this.menuCtrl.open();
  }

  openPage(page: Page){
    this.navCtrl.push(page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



  onClickProfil(){
    console.log(`${this.TAG} user id : ${this.user.id}`); 
    this.navCtrl.push('ProfilPage', {user : this.user});
    }

}


