import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DepaPage } from '../depa/depa';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
depa=DepaPage;
Favoritos=FavoritosPage;
favoritos=[];

depas=
[
  {imagen:"../assets/imgs/1.jpg", producto: "Casa amplia en venta", ubicacion: "Loma Bonita, Tonalá", precio: "$1,300,000.00", antiguedad: "8 años", terreno: "120 m2", construccion: "120 m2", cuartos: "4", banos: "4.5", nombre: "Liz Loma González", tel: "(33)10888500"},
  {imagen:"../assets/imgs/2.jpeg", producto: "Departamento en renta", ubicacion: "Jardines del Country", precio: "$17,000.00", antiguedad: "5 años", terreno: "114 m2", construccion: "114 m2", cuartos: "2", banos: "2", nombre: "María Esther Isaac Lozada", tel: "(33)12303185"},
  {imagen:"../assets/imgs/3.jpg", producto: "Condominio en venta", ubicacion: "Colomos Providencia", precio: "$6,150,000.00", antiguedad: "15 años", terreno: "200 m2", construccion: "180 m2", cuartos: "3", banos: "4.5", nombre: "Gilberto Rangel Romo", tel: "(33)35065741"},  
  {imagen:"../assets/imgs/4.jpg", producto: "Residencia en venta", ubicacion: "Puerta de Hierro", precio: "$14,490,000.00", antiguedad: "2 años", terreno: "446 m2", construccion: "400 m2", cuartos: "4", banos: "4",  nombre: "Fernando Toledo", tel: "(33)14578525"},
  {imagen:"../assets/imgs/5.jpg", producto: "Casa en renta", ubicacion: "Valle Real", precio: "$14,990.00", antiguedad: "3 años", terreno: "128 m2", construccion: "128 m2", cuartos: "3", banos: "3.5",  nombre: "Igea Tierra", tel: "(33)20149095"},    
  {imagen:"../assets/imgs/6.jpg", producto: "Casa en venta", ubicacion: "Santa Teresita", precio: "$1,600,000.00", antiguedad: "50 años", terreno: "125 m2", construccion: "170 m2", cuartos: "4", banos: "2.5", nombre: "Cecilia Rentería", tel: "(33)36857250"},  
  {imagen:"../assets/imgs/7.jpg", producto: "Condominio en venta", ubicacion: "Barrio Analco", precio: "$3,900,000.00", antiguedad: "50 años", terreno: "410 m2", construccion: "586 m2", cuartos: "5", banos: "3", nombre: "Ricardo Sotomayor", tel: "(33)31274254"},
  {imagen:"../assets/imgs/8.jpg", producto: "Departamento venta o renta", ubicacion: "Quinta Velarde, Guadalajara", precio: "$1,160,000.00", antiguedad: "0 años", terreno: "62 m2", construccion: "62 m2", cuartos: "2", banos: "2", nombre: "José Cota", tel: "(33)36629550"},
  {imagen:"../assets/imgs/9.jpg", producto: "Departamento en venta", ubicacion: "Jardines del Bosque", precio: "$1,950,000.00", antiguedad: "25 años", terreno: "104 m2", construccion: "104 m2", cuartos: "3", banos: "2", nombre: "Jaime Ramírez Reyes", tel: "(33)34993896"},     
  {imagen:"../assets/imgs/10.jpg", producto: "Departamento en venta", ubicacion: "Ladron de Guevara", precio: "$3,150,000.00", antiguedad: "8 años", terreno: "110 m2", construccion: "110 m2", cuartos: "2", banos: "2.5", nombre: "Mirna Silvia López", tel: "(33)1090854"},     
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.favoritos=this.navParams.get("fav");
  }

  clickDepa(d)
  {
    this.navCtrl.push(this.depa, {producto:d, favoritos:this.favoritos});
  }
  clickFav()
  {
    this.navCtrl.push(this.Favoritos, {favoritos:this.favoritos});
  }
}
