import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';

import { ModifAnimalPage } from '../pages/modif-animal/modif-animal';

import { SplashPage } from '../pages/splashScreen/splash/splash';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ProfilPage } from '../pages/profil/profil';
import { VeterinairePage } from '../pages/veterinaire/veterinaire';
import { InformationsPage } from '../pages/informations/informations';
import { AnnoncesPage } from '../pages/PagesAnnonces/annonces/annonces';
import { MessagesPage } from '../pages/messages/messages';
import { ParametresPage } from '../pages/parametres/parametres';




@NgModule({
  declarations: [
    MyApp,
    ConnexionPage,
    ModifAnimalPage,
    SplashPage,
    ProfilPage,
    AnnoncesPage,
    VeterinairePage,
    InformationsPage,
    MessagesPage,
    ParametresPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnexionPage,
    ModifAnimalPage,
    SplashPage,
    ProfilPage,
    AnnoncesPage,
    VeterinairePage,
    InformationsPage,
    MessagesPage,
    ParametresPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
