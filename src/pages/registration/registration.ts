import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

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
              public loadingCtrl:LoadingController,
              private fire: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


  registr(){
    
    this.loading = this.loadingCtrl.create({
      content : "Please wait ..."
    });
    this.loading.present();
    
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(user.user.uid);
      this.navCtrl.setRoot(TabsPage,{'uid':user.user.uid});
    })  
    .catch(function(error) {
      console.log(error);
      
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    this.loading.dismiss();
    
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
  }
}
