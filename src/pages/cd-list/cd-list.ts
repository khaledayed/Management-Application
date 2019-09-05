import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { dataService } from '../../services/data.service';
import { LendCdPage } from './lend-cd/lend-cd';

@IonicPage()
@Component({
    selector: 'page-cd-list',
    templateUrl: 'cd-list.html',
})
export class CdListPage {
    CDs: any;
constructor(
    public navCtrl : NavController,
    public navParams: NavParams,
    private dataService: dataService,
    private modal: ModalController){  
                }
ionViewWillEnter(){
    this.CDs = this.dataService.listCD.slice();
}         
ionViewDidLoad(){
    console.log('ionViewDidLoad CdListPage');
}
showCD(index){
    this.modal.create(LendCdPage, {index}).present()
}
}