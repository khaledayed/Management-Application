import { NgModule } from "@angular/core";
import { LendCdPage } from "./lend-cd";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
        LendCdPage,
    ],
    imports: [
        IonicPageModule.forChild(LendCdPage),
    ],
})
export class LendCdPageModule{}