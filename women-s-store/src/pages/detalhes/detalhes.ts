import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }
  fechar() {
    //this.viewCtrl.dismiss();
    this.navCtrl.setRoot(HomePage);
  }
  abrirCarrinho(){
    this.navCtrl.setRoot('CarrinhoPage');
  }
  data = 0;
  
  increment() {
    this.data = this.data + 1;
    
  }
  decrement(){
    this.data = this.data - 1;
    
  }

}

