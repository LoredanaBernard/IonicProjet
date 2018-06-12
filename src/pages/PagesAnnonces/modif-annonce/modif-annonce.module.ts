import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifAnnoncePage } from './modif-annonce';

@NgModule({
  declarations: [
    ModifAnnoncePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifAnnoncePage),
  ],
})
export class ModifAnnoncePageModule {}
