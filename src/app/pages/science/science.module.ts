import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SciencePageRoutingModule } from "./science-routing.module";

import { SciencePage } from "./science.page";
import { SharedModuleModule } from "src/app/Components/shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciencePageRoutingModule,
    IonicModule,
    SharedModuleModule,
  ],
  declarations: [SciencePage],
})
export class SciencePageModule {}
