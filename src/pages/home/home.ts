import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

const key = 'firstVisited';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  ngOnInit(): void{
    this.storage.get(key).then(x => console.log(x));
  }

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  persistValue() {
    this.storage.get(key).then(x => this.storage.set(key,!x))
  }

  showValue() {
    this.storage.get(key).then(x => console.log(x))
  }
}
