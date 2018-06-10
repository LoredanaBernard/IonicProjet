import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';
import { Annonce } from '../../../model/Annonce';

/**
 * Generated class for the AnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
})
export class AnnoncePage {
  user: User;
  annonce: Annonce;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.annonce =navParams.get("annonce");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePage');
  }


}
