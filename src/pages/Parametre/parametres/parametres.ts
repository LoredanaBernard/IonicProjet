import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';

/**
 * Generated class for the ParametresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {
  readonly TAG:String ='ParametresPage';
  user: User;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');
  }

  onClickRemove(){
    this.navCtrl.push('CloturerComptePage', {user : this.user});
  }

  onClickModif(){
    this.navCtrl.push('ModifComptePage', {user : this.user});
  }
}
