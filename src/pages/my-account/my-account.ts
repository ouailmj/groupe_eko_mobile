import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { ChangePasswordPage } from '../change-password/change-password';

@IonicPage({
	name: 'page-my-account',
	segment: 'myaccount'
})

@Component({
    selector: 'page-my-account',
    templateUrl: 'my-account.html'
})

export class MyAccountPage {
  profiledata: Boolean = true;
  isReadonly = true;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profiles-bg',
      message: 'Your Data was Edited!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot('page-home');
    }, 3000)
  }

  sendDataPassword(){
    this.navCtrl.setRoot('page-edit-password');
  }
}
