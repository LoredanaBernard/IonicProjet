import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Annonce } from '../../../model/Annonce';
import { User } from '../../../model/User';
import { Commentaire } from '../../../model/Commentaire';
import *as firebase from 'firebase';


/**
 * Generated class for the CommentairesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentaires',
  templateUrl: 'commentaires.html',
})
export class CommentairesPage {
  readonly TAG:String ='CommentairesPage';
  user: User;
  annonce: Annonce;
  listCommentaires: Commentaire[]= [];
  commentaireBidon: Commentaire;
  commentaireBidon2: Commentaire;
  comment: Commentaire;
  ref : firebase.database.Reference; 
  refCom :firebase.database.Reference;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);
    this.annonce = navParams.get("annonce");
    console.log(`${this.TAG} annonce_id : ${this.annonce.id}`);

    this.refCom = firebase.database().ref('Annonces/'+this.annonce.id + '/Commentaires');
    this.refCom.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listCommentaires.push(ItemSnap.val());
        return false;
      });      
    });
  
    console.log(`${this.TAG} listCommentaires taille: ${this.listCommentaires.length}`);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentairesPage');
  }

  onClickComment(annonce: Annonce, texte: string){
    this.ref= firebase.database().ref('Annonces/'+this.annonce.id + '/Commentaires/');
    this.comment = new Commentaire();

    this.comment.creerCommentaire(this.ref, annonce, this.user, texte);

    let toast = this.toastCtrl.create({
      message: 'Commentaire ajoutée !', 
      duration: 2000
    });
    toast.present();

    this.navCtrl.setRoot('AnnoncesPage', {user: this.user});

  }

}
