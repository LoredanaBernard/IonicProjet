import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifAnimalPage } from './modif-animal';

@NgModule({
  declarations: [
    ModifAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifAnimalPage),
  ],
})
export class ModifAnimalPageModule {}
