import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { dataService } from '../../services/data.service';
import { LendBookPage } from './lend-book/lend-book';



@IonicPage()
@Component({
    selector: 'page-book-list',
    templateUrl: 'book-list.html',
})
export class BookListPage {
    books: any[];

constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataServce: dataService,
    private modal: ModalController){

                }
ionViewWillEnter(){
    this.books = this.dataServce.listBook.slice();
}
ionViewDidLoad(){
    console.log('ionViewDidLoad BookListPage');
}
showBook(index){
    this.modal.create(LendBookPage, {index}).present()
}
}