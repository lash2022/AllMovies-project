import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent
      }
      ,
      {
        path: 'movies',
        loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
