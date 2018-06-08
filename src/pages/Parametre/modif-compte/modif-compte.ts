import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';
import *as firebase from 'firebase';
/**
 * Generated class for the ModifComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-compte',
  templateUrl: 'modif-compte.html',
})
export class ModifComptePage {
  private user: User;
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifComptePage');
  }

  onClickModif( prenom:string,nom:string, tel:string, email:string, ville:string, mdp: string){
    this.ref=firebase.database().ref('User/'+ this.user.id);
    this.ref.update({
      nom :nom,
      prenom: prenom,
      mail: email,
      telephone:tel,
      mdp : mdp,
      ville: ville
  });
  this.navCtrl.push('ParametresPage', {user : this.user});
  }

}
