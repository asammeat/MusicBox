import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    this.loading = this.loadingCtrl.create({
      content : "Please wait ..."
    });
    this.loading.present();
    
    // TODO firebase auth ile login yapilacak

    this.loading.dismiss();
    this.navCtrl.setRoot(TabsPage);
  }

  signUp(){
    this.navCtrl.setRoot(RegistrationPage);
  }


}
