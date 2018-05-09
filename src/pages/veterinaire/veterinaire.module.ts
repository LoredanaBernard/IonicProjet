import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeterinairePage } from './veterinaire';

@NgModule({
  declarations: [
    VeterinairePage,
  ],
  imports: [
    IonicPageModule.forChild(VeterinairePage),
  ],
})
export class VeterinairePageModule {}
