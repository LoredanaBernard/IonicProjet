import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';

/**
 * Generated class for the Inscription2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription2',
  templateUrl: 'inscription2.html',
})
export class Inscription2Page {
  readonly TAG:String ='Inscription2Page';
  private user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.email}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inscription2Page');
  }

  onClickPageSuivante(mail: string ,telephone: number){
    this.user.email = mail;
    this.user.telephone = telephone;

    this.navCtrl.push('Inscription3Page', {user : this.user});
  }

}
