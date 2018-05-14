import *as firebase from 'firebase';
import { Annonce } from './Annonce';
import { User } from './User';
import { DateTime } from 'ionic-angular';
export class Commentaire{
    id_comment: number;
    id_auteur: string;
    texte: string;
    date: string;

    // Creation de commantaire pour l'annonce
    creerCommentaire(ref:firebase.database.Reference, annonce:Annonce, auteur: User, texte:string){
        ref.set({
            id: 1,
            id_auteur: auteur.id,
            id_annonce: annonce.id,
            texte: texte
        });
    }
}