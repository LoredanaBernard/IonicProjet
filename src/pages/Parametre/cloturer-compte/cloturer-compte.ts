import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../../model/User';
import { ConnexionPage } from '../../connexion/connexion';
import *as firebase from 'firebase';

/**Page de cloture de compte utilisateur */

@IonicPage()
@Component({
  selector: 'page-cloturer-compte',
  templateUrl: 'cloturer-compte.html',
})
export class CloturerComptePage {
  readonly TAG:String ='CloturerComptePage';
  user: User;
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloturerComptePage');
  }

  onClickDelete(){
    let alert = this.alertCtrl.create({
      title: 'Confirmer cloture',
      message: 'Voulez-vous cloturer votre compte ?',
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
            console.log('Compte supprimé');
            this.supprimerBDD();
            let toast = this.toastCtrl.create({
              message: 'Compte supprimé',
              duration: 3000
            });
            toast.present();
            this.navCtrl.push(ConnexionPage);
          }
        }
      ]
    });
    alert.present();
  }

  supprimerBDD(){
    // Supprimer l'utilisateur de la base de données 
    this.ref=firebase.database().ref('User/'+ this.user.id);
    this.ref.remove();
  }

}
