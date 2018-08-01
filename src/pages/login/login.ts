import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { TabsPage } from '../tabs/tabs';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

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
  email;
  password;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private fire: AngularFireDatabase
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    this.loading = this.loadingCtrl.create({
      content : "Please wait ..."
    });
    
    
    // TODO firebase auth ile login yapilacak
    this.loading.present();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(user=>{
          console.log(user.user.uid);
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage,user.user.uid);
          
        })
    
    
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      this.loading.dismiss();
      
      var errorCode = error.code;
      var errorMessage = error.message;
      // ;
      // ...
    });


    

    
  }

  signUp(){
    this.navCtrl.setRoot(RegistrationPage);
  }

}
