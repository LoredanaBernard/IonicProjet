import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProfilPage } from '../../profil/profil';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';

/**
 * Generated class for the AjoutAnimal3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-animal3',
  templateUrl: 'ajout-animal3.html',
})
export class AjoutAnimal3Page {
  readonly TAG:String ='AjoutAnimal_3';
  user: User;
  animal : Animal;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
      this.user = navParams.get("user");
      console.log(`${this.TAG} utilisateur : ${this.user.nom}`);
      this.animal = navParams.get("animal");
      console.log(`${this.TAG} utilisateur : ${this.animal.name}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnimal3Page');
  }

  onClickValiderAjout(age:number, s:string){
    // Récupération des données de la vue 
    this.animal.age =age;
    this.animal.sexe=s;

    //Ajout de l'animal créé à la base de donnée 
    this.animal.id=this.user.id+"_"+this.animal.name; // Ajout aléatoire d'id
    this.animal.id_user=this.user.id;
    this.animal.creerAnimal();

    // Passage à la page profil
    this.navCtrl.push('HomePage', {user : this.user});

    // Toast
    let toast = this.toastCtrl.create({
      message: this.animal.name + ' ajouté !', 
      duration: 3000
    });
    toast.present();
  }
}
