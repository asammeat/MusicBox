import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  name;
  email;
  password;
  loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


  registr(){
    
    this.loading = this.loadingCtrl.create({
      content : "Please wait ..."
    });
    this.loading.present();
    
    // TODO firebase auth ile registration yapilacak

    this.loading.dismiss();
    this.navCtrl.setRoot(TabsPage);
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
  }
}
