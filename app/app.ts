import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { LoginPage } from './pages/login/login';

import { 
  FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire, 
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig
 } from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyBB6gr9cjCPbiHLss-caDP62RxB6Hz3I9U', 
    authDomain: 'devdactic-firebase-920c9.firebaseapp.com', 
    databaseURL: 'https://devdactic-firebase-920c9.firebaseio.com', 
    storageBucket: 'devdactic-firebase-920c9.firebaseio.com',
})]);
