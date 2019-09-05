import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage{
    constructor(public navCtrl: NavController,
                public navParams: NavParams ) {
}
ionViewDidLoad(){
    console.log('ionViewDidLoad SettingsPage');
}
}