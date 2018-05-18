import *as firebase from 'firebase';
import { User } from './User';
export class Annonce{
    id:number;
    id_user:string;
    name_user: string;
    name: string;
    image: string;    
    type: string;
    date: Date;
    description: string;
    nb_comment: number;
    nb_vus: number;

    reference: firebase.database.Reference;
    referenceID: firebase.database.Reference;
    referenceUser: firebase.database.Reference;
    listAnnonces: Annonce[] = [];

    creerAnnonce(user: User){       
        //Creation de l'id
        this.referenceID = firebase.database().ref('Annonces/');
        this.referenceID.on('value',ItemSnapShot =>{
            ItemSnapShot.forEach(ItemSnap =>
            {
              this.listAnnonces.push(ItemSnap.val());
              return false;
            });      
          });
          console.log(`Annonce : listAnimaux taille: ${this.listAnnonces.length}`);
          this.id = this.listAnnonces.length + 1;
          console.log(`Annonce : id: ${this.id}`);

        // Ajout de l'annonce à la BDD dans Annonces
        this.reference = firebase.database().ref('Annonces/'+ this.id);
        this.reference.set({
            id : this.id,
            auteur: user.id,
            type: this.type,
            image: this.image,
            date: this.date,
            description: this.description,
            commentaires: 0,
            vus: 0
        });

        // Ajout de l'id de l'annonce dans l'utilisateur
        this.referenceUser = firebase.database().ref('User/'+ user.id +'/Annonce/'+ this.id);
        this.referenceUser.set({
            id_annonce : this.id,
            date_annonce: this.date
        });

    }

    

    modifAnnonce(){

    }

    supprimerAnnonce(){
        // Retrait de l'annonce par l'auteur
        
    }

}