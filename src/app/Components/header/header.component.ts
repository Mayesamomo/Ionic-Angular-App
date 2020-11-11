import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { IArticle } from "src/app/Interfaces/article";
import { SearchResultPage } from "src/app/pages/search-result/search-result.page";

import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  results: Observable<any>;
  //searchTerm: string = "";
  searchResults: IArticle[] = [];
  constructor(
    private news: NewsApiService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SearchResultPage,
    });

    await modal.present();
  }
}
