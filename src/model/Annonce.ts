import *as firebase from 'firebase';
export class Annonce{
    id:string;
    id_user:string;
    name: string;
    image: string;
    type: string;
    date: Date;
    description: string;
    nb_comment: number;

    reference: firebase.database.Reference;


    creerAnnonce(){

    }

    modifAnnonce(){

    }

    supprimerAnnonce(){
        
    }

}