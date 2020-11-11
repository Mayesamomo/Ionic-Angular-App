import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // creating an array of Object to store path, title,icon and color of pages
  appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home",
      color: "#00cec9",
    },
    {
      title: "Business",
      url: "/business",
      icon: "briefcase",
      color: "#751aff",
    },
    {
      title: "Entertainment",
      url: "/entertainment",
      icon: "film",
      color: "#ff7675",
    },
    {
      title: "Health",
      url: "/health",
      icon: "heart",
      color: "#fdcb6e",
    },
    {
      title: "Science",
      url: "/science",
      icon: "planet",
      color: "#862d2d",
    },
    {
      title: "Sports",
      url: "/sports",
      icon: "football",
      color: "#e600e6",
    },
    {
      title: "Technology",
      url: "/technology",
      icon: "pulse",
      color: "#d63031",
    },
    {
      title: "Weather",
      url: "/weather-page",
      icon: "rainy",
      color: "#669900",
    },
  ];
}
