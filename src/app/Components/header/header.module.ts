import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { HeaderComponent } from "./header.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { SearchResultPage } from "src/app/pages/search-result/search-result.page";

@NgModule({
  declarations: [SharedModuleModule, HeaderComponent, SearchResultPage],
  entryComponents: [SearchResultPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HeaderComponent,
      },
    ]),
  ],
})
export class HeaderModule {}
