import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';

/**
 * Generated class for the ConfidentialitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confidentialite',
  templateUrl: 'confidentialite.html',
})
export class ConfidentialitePage {
  readonly TAG:String ='ConfidentialitePage';
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfidentialitePage');
  }

}
