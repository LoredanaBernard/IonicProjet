import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { ModifAnimalPage } from '../modif-animal/modif-animal';

import { Animal } from '../../model/Animal';
import *as firebase from 'firebase';
import { User } from '../../model/User';

/**
 * Generated class for the ProfilAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-animal',
  templateUrl: 'profil-animal.html',
})
export class ProfilAnimalPage {
  readonly TAG:String ='ProfilPage';
  user: User;
  animal : Animal;
  ref : firebase.database.Reference; 
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController) {

    this.user = navParams.get("user");
    this.animal = navParams.get("animal");
    console.log(`${this.TAG} animal : ${this.animal.name}`);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilAnimalPage');
  }


  // Modification d'un animal
  onClickModifAnimal(){
    this.navCtrl.push('ModifAnimalPage', {animal: this.animal, user : this.user});
  }

  // Suppression d'un animal de la liste
  onClickRemoveAnimal(){ 
    let alert = this.alertCtrl.create({
      title: 'Confirmer suppression',
      message: 'Voulez-vous retirer cet animal de votre liste ?',
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
            console.log('Animal supprimé');
            // Suppression des annonces associees
            this.ref = firebase.database().ref('Annonces/' + this.animal.id_annonce);
            this.ref.remove();
            // Suppression de l'animal dans BDD User
            this.ref = firebase.database().ref('User/'+ this.user.id +'/Animal/'+ this.animal.id);
            this.ref.remove();
            let toast = this.toastCtrl.create({
              message: 'Animal supprimé',
              duration: 3000
            });
            toast.present();
            this.navCtrl.push(ProfilPage);
          }
        }
      ]
    });
    alert.present();
  }
  }


