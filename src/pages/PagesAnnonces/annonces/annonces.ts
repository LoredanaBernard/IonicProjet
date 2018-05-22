import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import *as firebase from 'firebase';
import { User } from '../../../model/User';
import { Annonce } from '../../../model/Annonce';
import { Commentaire } from '../../../model/Commentaire';


/**
 * Generated class for the AnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonces',
  templateUrl: 'annonces.html',
})
export class AnnoncesPage {
  readonly TAG:String ='AnnoncesPage';
  user: User;
  listAnnonces : Annonce[] = [];
  annonceBidon : Annonce = new Annonce();
  comment: Commentaire;
  ref : firebase.database.Reference; 
  dateNow: Date;
  timeNow;
  timeAnnonce;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);


    this.ref= firebase.database().ref('Annonces/');
    
    // Récupération de la liste des animaux
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listAnnonces.push(ItemSnap.val());
        return false;
      });      
    });
    console.log(`${this.TAG} listAnnonces taille: ${this.listAnnonces.length}`);


  }

  // TO DO
  // Renvoi une string 
  // " ...heures" ou "... jours"
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncesPage');
  }

  onClickAddAnnonce(){
    this.navCtrl.push('AjoutAnnoncePage',  {user : this.user});
  }

  onClickGoComment(annonce: Annonce){
    this.navCtrl.push('CommentairesPage', {user: this.user, annonce: annonce});

  }
  

}
