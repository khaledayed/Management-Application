import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { dataService } from '../../../services/data.service';


@IonicPage()
@Component({
    selector: 'page-lend-book',
    templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{
    book: any;
    index: any;

constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dataService: dataService,
    private view: ViewController){

}
ngOnInit(){
    this.index = this.navParams.get('index')
    this.book = this.dataService.listBook[this.index]
}
preter(){
    this.dataService.ParseTreeResult(this.index, 'book');
}
dismiss(){
    this.view.dismiss()
}

}