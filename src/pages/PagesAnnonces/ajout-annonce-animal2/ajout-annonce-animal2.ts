import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Annonce } from '../../../model/Annonce';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';
import *as firebase from 'firebase';

/**
 * Generated class for the AjoutAnnonceAnimal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-annonce-animal2',
  templateUrl: 'ajout-annonce-animal2.html',
})
export class AjoutAnnonceAnimal2Page {
  readonly TAG:String ='AjoutAnnonceAnimal2Page';
  user: User;
  annonce: Annonce;
  listAnimaux : Animal[] = [];
  ref : firebase.database.Reference;
  refAnimal: firebase.database.Reference;
  ref_image: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController, 
    private alertCtrl: AlertController) {

    this.user = navParams.get("user");
    this.annonce = navParams.get("annonce");
    this.ref= firebase.database().ref('User/'+this.user.id+'/Animal');
    
    // Récupération de la liste des animaux
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listAnimaux.push(ItemSnap.val());
        return false;
      });      
    });
    console.log(`${this.TAG} listAnimaux taille: ${this.listAnimaux.length}`);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnnonceAnimal2Page');
  }

  onClickPageSuivante(nom_animal: string,texte:string){
    if(nom_animal == null || texte==null){
      let alert = this.alertCtrl.create({
        title: 'Données manquantes',
        message: 'Tous les champs doivent être remplis.',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
          
        ]
      });
      alert.present();
    }
    else {
      // Récuperer l'image de l'animal
    this.refAnimal = firebase.database().ref('User/'+ this.user.id + '/Animal/'+ this.user.id + '_' + nom_animal);
    console.log(`${this.TAG} User/ ${this.user.id} /Animal ${this.user.id} _ ${nom_animal}`);

    this.refAnimal.on('value',PassSnapShot =>{
       this.ref_image= PassSnapShot.val().image;  
     });
     console.log(`${this.TAG} ${this.ref_image}`);
     // Affecter l'image de l'animal à l'annonce
    this.annonce.image= this.ref_image;

    this.annonce.description = texte;
    this.annonce.date = new Date();
    console.log(`${this.TAG} Date ${this.annonce.date}`);

    // Ajouter annonce à BDD 
    this.annonce.creerAnnonce(this.user, nom_animal);
    // Retour à pages des annonces // ne marche pas 
    this.navCtrl.push('AnnoncesPage', {user: this.user});

      // Toast
      let toast = this.toastCtrl.create({
        message: 'Annonce ajoutée !', 
        duration: 3000
      });
      toast.present();
  }
    }
    
}
