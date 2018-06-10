import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';
import { User } from '../../model/User';
import { Animal } from '../../model/Animal';
/**
 * Generated class for the ModifAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-animal',
  templateUrl: 'modif-animal.html',
})
export class ModifAnimalPage {
  private user: User;
  private animal: Animal;
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.animal = navParams.get("animal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifAnimalPage');
  }

  onClickModif(nom:string, age:number){
    this.ref=firebase.database().ref('User/'+ this.user.id+ '/Animal/'+ this.animal.id);
    this.ref.update({
      nom :nom,
      age: age
  });
  this.navCtrl.push('ProfilPage', {user : this.user});
  }
}
