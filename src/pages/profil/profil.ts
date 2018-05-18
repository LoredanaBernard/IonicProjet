import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilAnimalPage } from '../profil-animal/profil-animal';
import { AjoutAnimal1Page } from '../ajoutAnimal/ajout-animal1/ajout-animal1';
import { User } from '../../model/User';
import { Animal } from '../../model/Animal';
import *as firebase from 'firebase';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  readonly TAG:String ='ProfilPage';
  user: User;
  nb_animaux: number;
  listAnimaux : Animal[] = [];
  ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur_id : ${this.user.id}`);

 
    this.ref= firebase.database().ref('User/'+this.user.id+'/Animal');
    
    // Récupération de la liste des animaux
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listAnimaux.push(ItemSnap.val());
        return false;
      });      
    });
    this.nb_animaux = this.listAnimaux.length;
    console.log(`${this.TAG} listAnimaux taille: ${this.listAnimaux.length}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  
  onClickFicheAnimal (animal: Animal, user: User ){
    this.navCtrl.push('ProfilAnimalPage', {animal: animal, user : this.user});
  }

  onClickAddAnimal(){
    this.navCtrl.push('AjoutAnimal1Page',  {user : this.user});
  }

}
