import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentairesPage } from './commentaires';

@NgModule({
  declarations: [
    CommentairesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentairesPage),
  ],
})
export class CommentairesPageModule {}
