import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IArticle } from "src/app/Interfaces/article";
import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "app-science",
  templateUrl: "./science.page.html",
  styleUrls: ["./science.page.scss"],
})
export class SciencePage implements OnInit {
  newsArray: IArticle[] = [];
  constructor(private news: NewsApiService, private router: Router) {}

  ngOnInit(): void {
    //load the business category by default
    this.loadHeadLines("science");
  }
  loadHeadLines(category) {
    this.news.getNewbyCategory(category).subscribe((news) => {
      this.newsArray = news["articles"];
      console.log(this.newsArray);
    });
  }
  getDetails(news) {
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
}
