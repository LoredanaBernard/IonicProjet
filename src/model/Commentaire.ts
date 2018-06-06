import *as firebase from 'firebase';
import { Annonce } from './Annonce';
import { User } from './User';
import { DateTime } from 'ionic-angular';
export class Commentaire{
    id_comment: number;
    id_auteur: string;
    texte: string;
    date: Date;

    // Creation de commantaire pour l'annonce
    creerCommentaire(ref:firebase.database.Reference, annonce:Annonce, auteur: User, texte:string){
        this.date = new Date();
        console.log(`Date ajout commentaire ${this.date}`);

        let refCom = ref.push()
        refCom.set({
            id_auteur: auteur.id,
            id_annonce: annonce.id,
            date: this.date,
            texte: texte
        });
    }





    
}