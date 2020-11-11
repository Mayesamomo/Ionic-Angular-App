import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Weather } from "src/app/Interfaces/Weather";
import { WeatherApiService } from "src/app/services/weather-api.service";

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.page.html",
  styleUrls: ["./weather-page.page.scss"],
})
export class WeatherPagePage implements OnInit {
  weatherArray: Weather[] = [];
  lat;
  lon;
  weather;
  name: string;
  searchTerm: {};

  constructor(private weathers: WeatherApiService, private router: Router) {}

  ngOnInit(): void {
    // call method on here to load weather
    this.getLocation();
  }
  //method gets locations
  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weathers
          .getWeatherByCoordinate(this.lat, this.lon)
          .subscribe((data) => {
            this.weather = data;
          });
      });
    }
  }
  getCity(city) {
    this.weathers.getWeatherByCity(city).subscribe((data) => {
      this.weather = data;
      this.searchTerm = data;
    });
  }
}
