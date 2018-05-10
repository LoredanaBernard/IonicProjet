import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/User';
import *as firebase from 'firebase';
import { Annonce } from '../../model/Annonce';

/**
 * Generated class for the AnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonces',
  templateUrl: 'annonces.html',
})
export class AnnoncesPage {
  readonly TAG:String ='AnnoncesPage';
  user: User;
  listAnnonces : Annonce[] = [];
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncesPage');
  }

  onClickAddAnnonce(){
    this.navCtrl.push('AjoutAnnoncePage',  {user : this.user});
  }

}
