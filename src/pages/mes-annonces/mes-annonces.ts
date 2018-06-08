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
  listNumAnnonces: number[]= [];
  listAnnonces: Annonce[] = [];
  reference: firebase.database.Reference;
  id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    
    this.recupererNumAnnonces();
    this.recupererAnnonces();
    console.log(`${this.TAG} List num annonces taille: ${this.listNumAnnonces.length}`);
    console.log(`${this.TAG} List annonces taille: ${this.listAnnonces.length}`);



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesAnnoncesPage');
  }

  onClickAnnonce(annonce:Annonce){
    this.navCtrl.push('AnnoncePage', {annonce: annonce, user : this.user});
  }

  recupererNumAnnonces(){
    this.reference = firebase.database().ref('User/'+this.user.id+'/Annonce');
    this.reference.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listNumAnnonces.push(ItemSnap.val());
        return false;
      });      
    });
  }

  recupererAnnonces(){
    for(var i =1 ; i < this.listNumAnnonces.length; i++){
      this.id = this.listNumAnnonces[i];
      console.log(`${this.TAG} Ref : ${this.id}`);
   /*   this.reference = firebase.database().ref('Annonces/'+ nom);
      this.reference.on('value',ItemSnapShot =>{
        ItemSnapShot.forEach(ItemSnap =>
        {
          this.listAnnonces.push(ItemSnap.val());
          return false;
        });      
      });*/
    }
  }

}
