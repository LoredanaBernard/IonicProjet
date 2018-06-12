import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/User';
import { Annonce } from '../../model/Annonce';
import *as firebase from 'firebase';


/**
 * Generated class for the MesAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-annonces',
  templateUrl: 'mes-annonces.html',
})
export class MesAnnoncesPage {
  readonly TAG:String ='MesAnnoncesPage';

  user: User;
  listNumAnnonces: string[]= [];
  listAnnonces: Annonce[] = [];
  annonce: Annonce;
  reference: firebase.database.Reference;
  id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    
    this.recupererNumAnnonces();
    this.recupererAnnonces();
    



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesAnnoncesPage');
  }

  onClickAnnonce(annonce:Annonce){
    this.navCtrl.push('AnnoncePage', {annonce: annonce, user : this.user});
  }

  // Récupération des id des annonces créées par l'utilisateur
  recupererNumAnnonces(){
    this.reference = firebase.database().ref('User/'+this.user.id+'/Annonce');
    this.reference.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        
        this.listNumAnnonces.push(ItemSnap.key);
        console.log(`${this.TAG} List Num annonce key ${this.listNumAnnonces}`);

        return false;
      });      
    });

    console.log(`${this.TAG} List num annonces taille: ${this.listNumAnnonces.length}`);
    console.log(`${this.TAG} List Num annonce 1 ${this.listNumAnnonces[3]}`);


  }

  recupererAnnonces(){
    this.annonce = new Annonce();
    this.listNumAnnonces.forEach(elem=>{
      console.log(`${this.TAG} Elem  ${elem}`);
      this.reference = firebase.database().ref('Annonces/'+ elem);
      console.log(`${this.TAG} Ref ${this.reference}`);
      this.reference.on('value',PassSnapShot =>{
        // this.user = PassSnapShot.val();
         this.annonce.id = PassSnapShot.val().id;  
         this.annonce.date= PassSnapShot.val().dateString; 
         this.annonce.description = PassSnapShot.val().description;      
         this.annonce.image = PassSnapShot.val().image;
         this.annonce.nb_vus = PassSnapShot.val().vu;
         this.annonce.type =PassSnapShot.val().type;
         console.log(`${this.TAG} Annonce ${this.annonce.id}`);
        
         this.listAnnonces.push(this.annonce);  
    });
     
    });  
     
   console.log(`${this.TAG} List annonce 1 ${this.listAnnonces[1]}`);
   console.log(`${this.TAG} List annonces taille: ${this.listAnnonces.length}`);

/*this.reference.on('value',ItemSnapShot =>{
        ItemSnapShot.forEach(ItemSnap =>
        {
    //      console.log(`${this.TAG} List annonce ${this.listAnnonces}`);
          this.listAnnonces.push(ItemSnap.val());
          return false;
        }); 
    });*/

   /* this.listNumAnnonces.forEach(elem=>{
      
      this.reference = firebase.database().ref('Annonces/'+ elem);
      this.reference.on('value',ItemSnapShot =>{
        ItemSnapShot.forEach(ItemSnap =>
        {
    //      console.log(`${this.TAG} List annonce ${this.listAnnonces}`);
          this.listAnnonces.push(ItemSnap.val());
          return false;
        }); 
    });
    });
    console.log(`${this.TAG} List annonce 1 ${this.listAnnonces[1]}`);*/
    
      
   /*   this.reference = firebase.database().ref('Annonces/'+ nom);
      this.reference.on('value',ItemSnapShot =>{
        ItemSnapShot.forEach(ItemSnap =>
        {
          this.listAnnonces.push(ItemSnap.val());
          return false;
        });      
      });*/
    }


    onClickModif(annonce: Annonce){
      this.navCtrl.push('ModifAnnoncePage', {user: this.user, annonce:annonce});

    }
  }

