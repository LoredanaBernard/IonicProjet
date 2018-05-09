import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilAnimalPage } from './profil-animal';

@NgModule({
  declarations: [
    ProfilAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilAnimalPage),
  ],
})
export class ProfilAnimalPageModule {}
