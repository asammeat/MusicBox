import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uid;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.uid = navParams.get('uid');
  }

}
