import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';

/**
 * Generated class for the Inscription1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription1',
  templateUrl: 'inscription1.html',
})
export class Inscription1Page {
  readonly TAG:String ='Inscription1Page';
  private user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.email}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inscription1Page');
  }

  onClickPageSuivante(nom: string,prenom: string){
    this.user.nom=nom;
    this.user.prenom=prenom;

    this.navCtrl.push('Inscription2Page', {user : this.user});
  }

}
