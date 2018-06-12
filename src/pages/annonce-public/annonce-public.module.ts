import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncePublicPage } from './annonce-public';

@NgModule({
  declarations: [
    AnnoncePublicPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoncePublicPage),
  ],
})
export class AnnoncePublicPageModule {}
