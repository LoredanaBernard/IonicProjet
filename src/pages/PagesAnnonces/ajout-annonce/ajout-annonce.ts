import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';
import *as firebase from 'firebase';
import { Annonce } from '../../../model/Annonce';
/**
 * Generated class for the AjoutAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-annonce',
  templateUrl: 'ajout-annonce.html',
})
export class AjoutAnnoncePage {
  readonly TAG:String ='AjoutAnnoncePage';
  user: User;
  annonce: Annonce;
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnnoncePage');
  }

  onClickPageSuivante(type: string, titre: string){
    this.annonce = new Annonce();
    this.annonce.name=titre;
    this.annonce.type=type;

    if (type == "Animal perdu" || type == "Animal à donner"){
      this.navCtrl.push('AjoutAnnonceAnimal2Page', {user: this.user, annonce : this.annonce});
    }
    else {
      this.navCtrl.push('AjoutAnnonce2Page', {user: this.user, annonce: this.annonce});
    }
  }

}
