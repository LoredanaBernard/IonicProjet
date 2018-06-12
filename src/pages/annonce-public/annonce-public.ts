import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annonce } from '../../model/Annonce';
import *as firebase from 'firebase';

import { User } from '../../model/User';

/**
 * Generated class for the AnnoncePublicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce-public',
  templateUrl: 'annonce-public.html',
})
export class AnnoncePublicPage {
  user: User;
  annonce: Annonce;
  ref : firebase.database.Reference; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.annonce = navParams.get("annonce");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePublicPage');
  }

  modifNbVus(annonce: Annonce){
    annonce.nb_vus = annonce.nb_vus + 1;
    annonce.reference = firebase.database().ref('Annonces/'+ annonce.id);
    annonce.reference.update({
        vus:annonce.nb_vus
    });
  }

  onClickGoComment(annonce:Annonce){
    this.navCtrl.push('CommentairesPage', {user: this.user, annonce: annonce});

  }

}
