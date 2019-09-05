import { Component } from "@angular/core";
import { NavController, NavParams, IonicPage } from "ionic-angular";
import { BookListPage } from "../book-list/book-list";
import { CdListPage } from "../cd-list/cd-list";

@IonicPage()
@Component({
    selector:'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage{
    tab1Root = BookListPage;
    tab2Root = CdListPage;
    constructor(public navCtrl: NavController,
                public navParams: NavParams){

                }
ionViewDidLoad(){
    console.log('ionViewDidLoad TabsPage');
}
}