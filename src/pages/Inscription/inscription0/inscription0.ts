import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { User } from '../../../model/User';
import *as firebase from 'firebase';

/**
 * Generated class for the Inscription0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription0',
  templateUrl: 'inscription0.html',
})
export class Inscription0Page {
  readonly TAG:String ='Inscription1Page';
  private user: User;
  private user2: User;
  ref : firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inscription0Page');
  }

  onClickPageSuivante(username: string, mdp: string, mdp2:string){
    if (mdp == mdp2){
      //this.chercherNomUtilisateur(username);
      this.user = new User();
      this.user.id = username;
      this.user.password = mdp;
      this.navCtrl.push('Inscription1Page', {user : this.user});

    }

    else{
      let alert = this.alertCtrl.create({
        title: 'Mots de passe différents',
        message: 'Les deux mots de passe ne correspondent pas.',
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
    
  }

  chercherNomUtilisateur(nom:string){
    this.ref=firebase.database().ref('User/'+ nom);
    var key = this.ref.key;
    console.log(`${this.TAG} Key ${key}`); 
    if (key == null){
      console.log(`${this.TAG} Ref nulle`); 
      this.user = new User();
         this.navCtrl.push('Inscription1Page', {user : this.user});
    }
    console.log(`${this.TAG} Nom : ${nom}`); 
    this.user2 = new User();
    this.user2.id="";
    if(this.ref.path){
      this.ref.on('value',PassSnapShot =>{
        this.user2.id = PassSnapShot.val().util;  
        console.log(`${this.TAG} Nom user 2: ${this.user2.id}`); 
 
        if (this.user2.id!=null){
         let alert = this.alertCtrl.create({
           title: 'Nom déjà pris',
           message: 'Le nom d utilisateur ci-dessus est déjà pris. Veuillez en choisir un nouveau.',
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
         this.user = new User();
         this.navCtrl.push('Inscription1Page', {user : this.user});
       }        
       });
    }
    

    
  }

}
