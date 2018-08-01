import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../registration/registration';
import { NavController, NavParams } from 'ionic-angular/umd';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  uid;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,) {

  }
}
