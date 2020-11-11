import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class WeatherApiService {
  URL = "https://api.openweathermap.org/data/2.5/weather?"; //set url to api
  API_KEY = "1db2d85bc4535959dd67b97b4c99aded"; //set pikey

  constructor(private http: HttpClient) {}

  // get the weather by coordinates
  getWeatherByCoordinate(lat, lon) {
    let params = new HttpParams()
      .set("lat", lat) //latitude
      .set("lon", lon) //longitute
      .set("units", "imperial") //units
      .set("appid", this.API_KEY); //attach the api keys
    return this.http.get(this.URL, { params }); //return the  results
  }
  getWeatherByCity(city: string) {
    let params = new HttpParams()
      .set("q", city) //gets city mame
      .set("units", "imperial")
      .set("appid", this.API_KEY);
    return this.http.get(this.URL, { params }); //returns data with the given params
  }
}
