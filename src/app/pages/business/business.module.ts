import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BusinessPageRoutingModule } from "./business-routing.module";

import { BusinessPage } from "./business.page";
import { SharedModuleModule } from "src/app/Components/shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessPageRoutingModule,
    IonicModule,
    SharedModuleModule,
  ],
  declarations: [BusinessPage],
})
export class BusinessPageModule {}
