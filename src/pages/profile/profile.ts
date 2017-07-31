import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  imgProfile:string = "http://lorempixel.com/400/400";

  segmentSelect:any = 'about';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  onSegmentChanged(event){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
