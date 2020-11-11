import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HealthPageRoutingModule } from "./health-routing.module";

import { HealthPage } from "./health.page";
import { SharedModuleModule } from "src/app/Components/shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthPageRoutingModule,
    IonicModule,
    SharedModuleModule,
  ],
  declarations: [HealthPage],
})
export class HealthPageModule {}
