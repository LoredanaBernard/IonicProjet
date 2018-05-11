import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Annonce } from '../../../model/Annonce';
import { User } from '../../../model/User';

/**
 * Generated class for the AjoutAnnonceAnimal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-annonce-animal2',
  templateUrl: 'ajout-annonce-animal2.html',
})
export class AjoutAnnonceAnimal2Page {
  user: User;
  annonce: Annonce;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.user = navParams.get("user");
    this.annonce = navParams.get("annonce");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnnonceAnimal2Page');
  }

  onClickPageSuivante(animal: string,texte:string){
    // Ajouter annonce à BDD 

    // Retour à pages des annonces
    this.navCtrl.setRoot('AnnoncesPage', {user: this.user});

      // Toast
      let toast = this.toastCtrl.create({
        message: 'Annonce ajoutée !', 
        duration: 3000
      });
      toast.present();
  }
}
