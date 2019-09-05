import { NgModule } from '@angular/core';
import { CdListPage } from './cd-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        CdListPage,
    ],
    imports: [
        IonicPageModule.forChild(CdListPage),
    ],
})
export class CdListPageModule{}