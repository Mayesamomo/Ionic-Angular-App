import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IArticle } from "../Interfaces/article";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class NewsApiService {
  public baseUrl: any = "https://newsapi.org/v2/";
  public country: any = "country=in";
  public apiKey: any = "&apiKey=c886052d51f3460ab68c7b3bfaeb876c";
  //public searResult: any = "";
  results: IArticle[] = [];
  constructor(private http: HttpClient) {}
  //get the top news headlines fro newsapi
  getNews() {
    const url = this.baseUrl + "top-headlines?" + this.country + this.apiKey;
    return this.http.get(url);
  }
  // method return news filtered by category
  getNewbyCategory(category) {
    const url =
      this.baseUrl +
      "top-headlines?" +
      this.country +
      "&category=" +
      category +
      this.apiKey;
    return this.http.get(url);
  }

  searchData(title: string): Observable<any> {
    const url = this.baseUrl + "everything?q=" + title;
    return this.http.get(url).pipe(map((results) => results["search"]));
  }
}
