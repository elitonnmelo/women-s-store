import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RecuperarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarSenhaPage');
  }
  confirmar(){
    this.navCtrl.push('LoginPage');
    this.presentToast();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Sua nova senha foi enviado para o e-mail cadastrado acima, verifique sua caixa de mensagens!',
      duration: 3000
    });
    toast.present();
  }

}
