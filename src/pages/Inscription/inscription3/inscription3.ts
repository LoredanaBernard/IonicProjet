import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';



@IonicPage()
@Component({
  selector: 'page-inscription3',
  templateUrl: 'inscription3.html',
})
export class Inscription3Page {
  readonly TAG:String ='Inscription2Page';
  private user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.email}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inscription3Page');
  }

  onClickRegister(ville: string){
    this.user.ville = ville;

    this.user.creerCompte();

    this.navCtrl.push('HomePage', {user : this.user});
  }

}
