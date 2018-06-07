import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, MenuController } from 'ionic-angular';
import { User } from '../../model/User';
import *as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {
  readonly TAG:String ='ConnexionPage';
  user: User;
  ref : firebase.database.Reference;
 
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) {
    this.user = new User();
    //menuCtrl.enable(true);
 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

  onClickRegister(e: string, p:string){
    this.user = new User();
    this.user.id =e;
    this.user.password = p;

    this.navCtrl.push('Inscription0Page', {user : this.user});
   
  
  }

  onClickConnect(username:string, password: string){
    console.log(`${this.TAG} username : ${username}`); 
    
    this.ref=firebase.database().ref('User/'+ username);
 

    this.ref.on('value',PassSnapShot =>{
     // this.user = PassSnapShot.val();
      this.user.password = PassSnapShot.val().mdp;  
      this.user.email= PassSnapShot.val().mail; 
      this.user.id = PassSnapShot.val().util;      
      this.user.nom = PassSnapShot.val().nom;
      this.user.prenom = PassSnapShot.val().prenom;
      this.user.telephone = PassSnapShot.val().telephone;
      this.user.ville = PassSnapShot.val().ville;

      console.log(`${this.TAG} password : ${this.user.password}`); 
      console.log(`${this.TAG} password : ${this.user.email}`); 
      console.log(`${this.TAG} ville : ${this.user.ville}`); 

      if(this.user.password != password){
        let alert = this.alertCtrl.create({
          title: 'Erreur de données',
          message: 'Le nom d utilisateur ou mot de passe est incorrect.',
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
        this.navCtrl.push('HomePage',  {user : this.user});
      }

    });

    

    
  }
}
