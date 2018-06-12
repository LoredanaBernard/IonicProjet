import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annonce } from '../../../model/Annonce';
import { User } from '../../../model/User';
import *as firebase from 'firebase';


/**
 * Generated class for the ModifAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-annonce',
  templateUrl: 'modif-annonce.html',
})
export class ModifAnnoncePage {
  annonce: Annonce;
  user: User;
  reference: firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.annonce =navParams.get("annonce");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifAnnoncePage');
  }

  onClickModif( desc:string){
    this.reference=firebase.database().ref('Annonces/'+ this.annonce.id);
    this.reference.update({
      description: desc
  });
    this.navCtrl.push('MesAnnoncesPage', {user: this.user});
  }
}
