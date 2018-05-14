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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);
    this.annonce = navParams.get("annonce");
    console.log(`${this.TAG} annonce_id : ${this.annonce.id}`);

    //Commentaires de test
    this.commentaireBidon = new Commentaire();
    this.commentaireBidon.id_auteur="John";
    this.commentaireBidon.id_comment=12;
    this.commentaireBidon.texte="Je l'ai vu à telle adresse hier matin.";
    this.commentaireBidon.date="12 mai 2018";
    
    this.commentaireBidon2 = new Commentaire();
    this.commentaireBidon2.id_auteur="Doug";
    this.commentaireBidon2.id_comment=14;
    this.commentaireBidon2.texte="Je l'ai vu aussi, dans mon jardin hier.";
    this.commentaireBidon2.date="13 mai 2018";

    this.listCommentaires.push(this.commentaireBidon);
    this.listCommentaires.push(this.commentaireBidon2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentairesPage');
  }

  onClickComment(annonce: Annonce, texte: string){
    this.ref= firebase.database().ref('Annonces/'+annonce.id);
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
