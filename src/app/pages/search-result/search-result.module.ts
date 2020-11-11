import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchResultPageRoutingModule } from "./search-result-routing.module";

import { SearchResultPage } from "./search-result.page";
import { SharedModuleModule } from "src/app/Components/shared-module/shared-module.module";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/compiler";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultPageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [SearchResultPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SearchResultPageModule {}
