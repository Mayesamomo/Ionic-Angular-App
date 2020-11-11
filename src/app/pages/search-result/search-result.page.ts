import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { IArticle } from "src/app/Interfaces/article";
import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.page.html",
  styleUrls: ["./search-result.page.scss"],
})
export class SearchResultPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  type: IArticle[] = [];
  constructor(
    private modalCtrl: ModalController,
    private news: NewsApiService
  ) {}

  ngOnInit(): void {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.news.searchData(this.searchTerm);
  }
}
