import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*items = [
    'Tênis',
    'Shorts',
    'Camisas',
    'Calças'
  ];*/

  constructor(public navCtrl: NavController) {

  }
  categorias = [
    {
      id:1,
      nome:"Tênis",
      img: "../../assets/imgs/tenis.png"
    }, {
      id:2,
      nome:"Shorts",
      img: "../../assets/imgs/short.png"
    }, {
      id:3,
      nome:"Camisas",
      img:"../../assets/imgs/camisa.png"
    }, {
      id:4,
      nome:"Calças",
      img:"../../assets/imgs/calca.png"
    }
  ]
  itemSelected(categoria, id: number) {
    if (categoria.id == 1){
      this.navCtrl.push(ListPage);
    }
    if (categoria.id == 2){
      this.navCtrl.push('LoginPage');
    }
    if (categoria.id == 3){
      this.navCtrl.push('CadastrarPage');
    }
    if (categoria.id == 4){
      this.navCtrl.push('RecuperarSenhaPage');
    }
   
    
  }
  abrirDetalhes(){
    this.navCtrl.setRoot('DetalhesPage');
  }
  carrinho(){
    this.navCtrl.setRoot('CarrinhoPage');
  }

}
