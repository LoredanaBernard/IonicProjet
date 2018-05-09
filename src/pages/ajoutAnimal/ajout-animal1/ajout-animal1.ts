import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutAnimal2Page } from '../ajout-animal2/ajout-animal2';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';

/**
 * Generated class for the AjoutAnimal1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-animal1',
  templateUrl: 'ajout-animal1.html',
})
export class AjoutAnimal1Page {
  readonly TAG:String ='AjoutAnimal1';
  user: User;
  animal : Animal;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.nom}`);

    this.animal = new Animal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnimal1Page');
  }

  onClickPageSuivante(n: string, type:string){
    this.animal.name=n;
    this.animal.type=type;
    console.log(`${this.TAG} animal: ${this.animal.name}`);
    this.navCtrl.push('AjoutAnimal2Page',{ user: this.user, animal: this.animal });
    
  }

}
