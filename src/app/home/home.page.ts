import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { IArticle } from "../Interfaces/article";
import { NewsApiService } from "../services/news-api.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  newsArray: IArticle[] = [];
  default: any = "";

  constructor(
    private news: NewsApiService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadHeadLines();
  }
  // this method loads automatically the news page with the url pointing to all articles
  loadHeadLines() {
    this.news.getNews().subscribe((news) => {
      this.newsArray = news["articles"];
    });
  }

  getNewsDeatils(news) {
    this.router.navigate([
      "/newsdetail",
      {
        title: news.title,
        desc: news.description,
        img: news.urlToImage,
        url: news.url,
      },
    ]);
  }
  //load images automatically
  imageload(item) {
    item.load = true;
  }
  // get background-image()
  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(image);
  }
}
