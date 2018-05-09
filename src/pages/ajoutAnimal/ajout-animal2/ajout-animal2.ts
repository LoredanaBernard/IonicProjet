import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutAnimal3Page } from '../ajout-animal3/ajout-animal3';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';
import *as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-ajout-animal2',
  templateUrl: 'ajout-animal2.html',
})
export class AjoutAnimal2Page {
  readonly TAG:String ='AjoutAnimal_2';
  user: User;
  animal : Animal;
  refIm : firebase.storage.Reference;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.nom}`);
    this.animal = navParams.get("animal");
    console.log(`${this.TAG} animal : ${this.animal.name}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnimal2Page');
  }

  onClickPageSuivante3(im:string){
    // Ajouter image à BDD

    
   this.animal.image =im;
   this.navCtrl.push('AjoutAnimal3Page', { user: this.user, animal: this.animal });
  }

}
