import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuponsPage } from './cupons';

@NgModule({
  declarations: [
    CuponsPage,
  ],
  imports: [
    IonicPageModule.forChild(CuponsPage),
  ],
})
export class CuponsPageModule {}
