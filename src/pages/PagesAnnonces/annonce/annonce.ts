import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';
import { Annonce } from '../../../model/Annonce';
import *as firebase from 'firebase';

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
  reference: firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    this.user = navParams.get("user");
    this.annonce =navParams.get("annonce");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePage');
  }

  onClickModifAnnonce(annonce:Annonce){
    this.navCtrl.push('ModifAnnoncePage', {user: this.user, annonce:annonce});
    
  }

  onClickRemoveAnnonce(){
    let alert = this.alertCtrl.create({
      title: 'Confirmer suppression',
      message: 'Voulez-vous retirer cette annonce ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Annonce supprimée');
            // Suppression de l'annonce dans BDD
            this.reference = firebase.database().ref('Annonces/' + this.annonce.id);
            this.reference.remove();
            // Suppression de l'annonce dans BDD User
            this.reference = firebase.database().ref('User/'+ this.user.id +'/Annonce/'+ this.annonce.id);
            this.reference.remove();
            let toast = this.toastCtrl.create({
              message: 'Animal supprimé',
              duration: 3000
            });
            toast.present();
            this.navCtrl.push('MesAnnoncesPage', {user: this.user});
          }
        }
      ]
    });
    alert.present();
  }
}
