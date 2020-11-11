import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Location } from "@angular/common";
@Component({
  selector: "app-newsdetail",
  templateUrl: "./newsdetail.page.html",
  styleUrls: ["./newsdetail.page.scss"],
})
export class NewsdetailPage implements OnInit {
  page: any = {};
  newsData: any;
  headLine: any;
  description: any;
  image: any;
  url: any;
  constructor(
    private actRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private navCtrl: NavController,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.headLine = this.actRoute.snapshot.paramMap.get("title");
    this.description = this.actRoute.snapshot.paramMap.get("desc");
    this.image = this.actRoute.snapshot.paramMap.get("img");
    this.url = this.actRoute.snapshot.paramMap.get("url");
  }
  back() {
    //this.navCtrl.navigateBack("/");
    this.location.back();
  }

  getBackground(image) {
    // get and sanitize backgroundImage
    return this._sanitizer.bypassSecurityTrustResourceUrl(image);
  }
  open() {
    window.open(this.url);
  }
}
