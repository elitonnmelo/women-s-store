import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }
  confirmar(){
    this.navCtrl.push('LoginPage');
    this.presentToast();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Usuário criado com suscesso!',
      duration: 3000
    });
    toast.present();
  }

}
