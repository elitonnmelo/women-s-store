import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

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
  items = [
    'Ultimas Compras',
    'Cupons de Desconto',
    'Meu carrinho',
    'Favoritos',
    'Dados da Conta',
    'Endereços para entrega',
    'Formas de Pagamento'

    
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    
    ) {
  }
  itemSelected(item: string) {
    console.log("Item selecionado", item);
    if (item == "Ultimas Compras"){
      const modal = this.modalCtrl.create('UltimasComprasPage');
      modal.present();
    }
    if (item == "Cupons de Desconto"){
      const modal = this.modalCtrl.create('CuponsPage');
      modal.present();
    }
    if (item == "Meu carrinho"){
      this.navCtrl.push('CarrinhoPage');
    }
    if (item == "Favoritos"){
      this.navCtrl.push('FavoritosPage');
    }
    if (item == "Dados da Conta"){
      const modal = this.modalCtrl.create('DadosDaContaPage');
      modal.present();
    }
    if (item == "Formas de Pagamento"){
      const modal = this.modalCtrl.create('FormasDePagamentoPage');
      modal.present();
    }
    if (item == "Endereços para entrega"){
      const modal = this.modalCtrl.create('EnderecosPage');
      modal.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosDaContaPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }


}
