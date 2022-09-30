import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    'Tênis',
    'Shorts',
    'Camisas',
    'Calças'
  ];

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
  itemSelected(categorias: string) {
    if (categorias == "Camisas"){
      this.navCtrl.push(ListPage);
    }
    if (categorias == "Shorts"){
      this.navCtrl.push('LoginPage');
    }
    if (categorias == "Tênis"){
      this.navCtrl.push('CadastrarPage');
    }
    if (categorias == "Calças"){
      this.navCtrl.push('RecuperarSenhaPage');
    }
   
    
  }

}
