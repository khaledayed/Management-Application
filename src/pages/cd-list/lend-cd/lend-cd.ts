import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { dataService } from '../../../services/data.service';


@IonicPage()
@Component({
    selector: 'page-lend-cd',
    templateUrl: 'lend-cd.html',
})
export class LendCdPage {
    Cd: any;
    index: any;
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private dataService: dataService,
        private view: ViewController){
                }
                
ngOnInit(){
    this.index = this.navParams.get('index')
    this.Cd = this.dataService.listCD[this.index]
}

preter(){
    this.dataService.ParseTreeResult(this.index, 'cd');
}

dismiss(){

    this.view.dismiss()
}

/*ionViewDidLoad(){
    console.log('ionViewDidLoad LendCdPage');
}*/
}