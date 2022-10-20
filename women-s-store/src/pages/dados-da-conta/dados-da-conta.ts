import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DadosDaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-da-conta',
  templateUrl: 'dados-da-conta.html',
})
export class DadosDaContaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosDaContaPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

}
