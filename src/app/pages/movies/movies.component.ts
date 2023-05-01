import { Component } from '@angular/core';
import { HomeContentComponent } from '../home-content/home-content.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  constructor(
    private homeContentComponent: HomeContentComponent
  ) { 
    this.homeContentComponent.isVisible = false;
  }
}
