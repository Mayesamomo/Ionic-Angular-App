import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "business",
    loadChildren: () =>
      import("./pages/business/business.module").then(
        (m) => m.BusinessPageModule
      ),
  },
  {
    path: "health",
    loadChildren: () =>
      import("./pages/health/health.module").then((m) => m.HealthPageModule),
  },
  {
    path: "science",
    loadChildren: () =>
      import("./pages/science/science.module").then((m) => m.SciencePageModule),
  },
  {
    path: "sports",
    loadChildren: () =>
      import("./pages/sports/sports.module").then((m) => m.SportsPageModule),
  },
  {
    path: "technology",
    loadChildren: () =>
      import("./pages/technology/technology.module").then(
        (m) => m.TechnologyPageModule
      ),
  },
  {
    path: "entertainment",
    loadChildren: () =>
      import("./pages/entertainment/entertainment.module").then(
        (m) => m.EntertainmentPageModule
      ),
  },
  {
    path: "newsdetail",
    loadChildren: () =>
      import("./pages/newsdetail/newsdetail.module").then(
        (m) => m.NewsdetailPageModule
      ),
  },
  {
    path: "search-result",
    loadChildren: () =>
      import("./pages/search-result/search-result.module").then(
        (m) => m.SearchResultPageModule
      ),
  },
  {
    path: "weather-page",
    loadChildren: () =>
      import("./pages/weather-page/weather-page.module").then(
        (m) => m.WeatherPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
