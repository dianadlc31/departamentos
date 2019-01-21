import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the DepaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depa',
  templateUrl: 'depa.html',
})
export class DepaPage {
  Favoritos=FavoritosPage;
  favoritos;
  producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto=this.navParams.get('producto');
    this.favoritos=this.navParams.get('favoritos');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepaPage');
  }

  clickAgregar()
  {
    this.favoritos.push(this.producto);
    this.navCtrl.pop();
  }

}
