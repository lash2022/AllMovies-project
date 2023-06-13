import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [

  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
      },
      {
        path: "search",
        loadComponent: () => import("./pages/search/search.component").then(m => m.SearchComponent)
      },
      {
        path: "movie/:id",
        loadComponent: () => import("./pages/details/details.component").then(m => m.DetailsComponent)
      },
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
