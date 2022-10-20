import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnderecosPage } from './enderecos';

@NgModule({
  declarations: [
    EnderecosPage,
  ],
  imports: [
    IonicPageModule.forChild(EnderecosPage),
  ],
})
export class EnderecosPageModule {}
