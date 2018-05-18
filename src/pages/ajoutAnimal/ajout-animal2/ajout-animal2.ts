import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutAnimal3Page } from '../ajout-animal3/ajout-animal3';
import { User } from '../../../model/User';
import { Animal } from '../../../model/Animal';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  private imageSrc: string;
  imageURL: any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera ) {
    this.user = navParams.get("user");
    console.log(`${this.TAG} utilisateur : ${this.user.nom}`);
    this.animal = navParams.get("animal");
    console.log(`${this.TAG} animal : ${this.animal.name}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnimal2Page');
  }

  onClickPageSuivante3(){
    // Ajouter image à BDD
    console.log(`${this.TAG} onCkickPageSuivante: début`);
    this.refIm = firebase.storage().ref('pictures');

    
   this.animal.image =this.imageSrc;
   console.log(`${this.TAG} onCkick image : ${this.animal.image}`);
   this.upload();
   this.navCtrl.push('AjoutAnimal3Page', { user: this.user, animal: this.animal });

  }

  private openGallery (){
    console.log(`${this.TAG} openGallery() `);
    let cameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
     // destinationType: this.camera.DestinationType.FILE_URI,
     destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,     
      saveToPhotoAlbum: true,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = 'data:image/jpeg;base64,' + file_uri, 
      err => console.log(err));

      console.log(`${this.TAG} openGallery() FIN `);
      
  }

  upload(){
    //Creation ref
    // Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = 'space.jpg';
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath

// File name is 'space.jpg'
var name = spaceRef.name

// Points to 'images'
var imagesRef = spaceRef.parent;

// Data URL string
var message = this.imageSrc;
imagesRef.putString(message, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
});

    
   /* this.refIm.child(this.uid()).child('pic.png').putString(this.imageSrc,'base64',{contentType:'image/png'}).then(savepic =>{
      this.imageURL = savepic.downloadURL;
    });

    
    console.log('Ajout-animal 2 BDD : upload()');
    console.log(`${this.TAG} upload() image : ${this.imageSrc}`);
    var message = this.imageSrc;
    this.refIm.putString(message, 'base64url').then(function(snapshot) {
    console.log('Uploaded a base64url string!');
    });
    console.log(`${this.TAG} upload() imgae : ${this.imageSrc}`);

   /* const image = `data:images/jpeg;base64,${this.imageSrc}`;

    this.refIm.putString(image,'DATA_URL');*/


    
  }


  
  uid() { 
    var d = new Date().getTime(); 
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) { 
      var r = (d + Math.random() * 16) % 16 | 0; 
      d = Math.floor(d / 16);
       return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      }); 
       return uuid;
   }

  
}
