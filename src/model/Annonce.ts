import *as firebase from 'firebase';
import { User } from './User';
export class Annonce{
  /*  dateNow: Date;
    timeNow;
    timeAnnonce;*/

    id:number;
    id_user:string;
    name_user: string;
    name: string;
    image: string;    
    type: string;
    date: Date;
    dateString;
    description: string;
    nb_comment: number;
    nb_vus: number;

    dateArg: string[];

    reference: firebase.database.Reference;
    referenceID: firebase.database.Reference;
    referenceUser: firebase.database.Reference;
    listAnnonces: Annonce[] = [];

    creerAnnonce(user: User){       
        //Creation de l'id
       this.creerId();

        // formatage date     
       this.formaterDate();

        // Ajout de l'annonce à la BDD dans Annonces
        this.reference = firebase.database().ref('Annonces/'+ this.id);
        this.reference.set({
            id : this.id,
            auteur: user.id,
          //  date: this.date.toDateString(),
            date: this.date,
            dateString: this.dateString,
            type: this.type,
            image: this.image,            
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

    creerId(){
      /*  this.referenceID = firebase.database().ref('Annonces/');
        this.referenceID.on('value',ItemSnapShot =>{
            ItemSnapShot.forEach(ItemSnap =>
            {
              this.listAnnonces.push(ItemSnap.val());
              return false;
            });      
          });
          console.log(`Annonce : listAnimaux taille: ${this.listAnnonces.length}`);
          this.id = this.listAnnonces.length + 1; // implique de pas supprimer d'annonce...
          console.log(`Annonce : id: ${this.id}`);*/

          this.id = Math.round(Math.random()*10000000);
          console.log(`ID Annonce  ${this.id}`);
    }

    formaterDate(){
        this.dateArg = this.date.toDateString().split(" ");
        switch(this.dateArg[1]){
            case "January" :
                this.dateArg[1] ="Janvier";            
                break;
             case "February" :
                this.dateArg[1] ="Février";            
                break;
             case "March" :
                this.dateArg[1] ="Mars";            
                break;
            case "April" :
                this.dateArg[1] ="Avril";            
                break;
            case "May" : this.dateArg[1] = "Mai";
                break;
            case "June" :
                this.dateArg[1] ="Juin";            
                break;
             case "July" :
                this.dateArg[1] ="Juillet";            
                break;
            case "August" :
                this.dateArg[1] ="Août";            
                break;
            case "September" :
                this.dateArg[1] ="Septembre";            
                break;
            case "October" :
                this.dateArg[1] ="Octobre";            
                break;
            case "November" :
                this.dateArg[1] ="Novembre";            
                break;
            case "December" :
                this.dateArg[1] ="Décembre";            
                break;
        }

        this.dateString = this.dateArg[2] + " " + this.dateArg[1] + " - " + this.date.getHours().toString() + ":" + this.date.getMinutes().toString();        
        console.log(`Date  ${this.date}`);
    }

    

   /* getNbHeures(): number{
       this.dateNow =  new Date();
        // Si l'annonce date du même jour ou de la veille mais - de 24h avant 
        // Affichage "... heures"
       
        this.timeNow = this.dateNow.getTime();
        this.timeAnnonce = this.date.getTime();
        console.log(` temps: ${this.timeNow - this.timeAnnonce}`);
        return (this.timeNow - this.timeAnnonce);
    
       
    /*
          if((this.dateNow.getDay == annonce.date.getDay) &&(this.dateNow.getMonth == annonce.date.getMonth)){
    
          }
           
           hoursNow : this.dateNow.getHours;
           hoursAnnonce :annonce.date.getDay; 
    
       // Sinon si l'annonce date de 1 jour ou plus
       // Affichage "... jours"
    
    
    
}*/
}