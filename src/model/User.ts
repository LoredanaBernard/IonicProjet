import {Animal} from "./Animal";
import *as firebase from 'firebase';

export class User {
    id: string;
    public nom: string;
    prenom: string;
    email: string;
    telephone:number;
    password: string;
    ville: string;
    listAnimaux :Animal[];


    reference: firebase.database.Reference;

   

    creerCompte(){
        this.reference = firebase.database().ref('User/'+ this.id);
        this.reference.set({
            util : this.id,
            nom :this.nom,
            prenom: this.prenom,
            mail:this.email,
            telephone:this.telephone,
            mdp : this.password,
            ville: this.ville
        });
    }
}
