import { NgModule } from '@angular/core';
import { BookListPage } from './book-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        BookListPage,
    ],
    imports: [
        IonicPageModule.forChild(BookListPage),
    ],
})
export class BookListPageModule {}