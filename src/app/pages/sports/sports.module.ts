import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SportsPageRoutingModule } from "./sports-routing.module";

import { SportsPage } from "./sports.page";
import { SharedModuleModule } from "src/app/Components/shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsPageRoutingModule,
    IonicModule,
    SharedModuleModule,
  ],
  declarations: [SportsPage],
})
export class SportsPageModule {}
