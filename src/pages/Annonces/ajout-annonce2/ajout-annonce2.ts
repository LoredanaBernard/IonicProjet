import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../../model/User';
import { Annonce } from '../../../model/Annonce';

/**
 * Generated class for the AjoutAnnonce2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-annonce2',
  templateUrl: 'ajout-annonce2.html',
})
export class AjoutAnnonce2Page {
  user: User;
  annonce: Annonce;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.user = navParams.get("user");
    this.annonce = navParams.get("annonce");''
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnnonce2Page');
  }

  onClickPageSuivante(texte: string){
    // Ajouter annonce à BDD 


    this.navCtrl.setRoot('AnnoncesPage', {user: this.user});

     // Toast
     let toast = this.toastCtrl.create({
      message: 'Annonce ajoutée !', 
      duration: 3000
    });
    toast.present();
  }

}
