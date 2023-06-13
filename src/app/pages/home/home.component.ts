import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from "../../components/slider/slider.component";
import {TmdbService} from "../../core/services";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private tmdbService: TmdbService
  ) { }

  ngOnInit() {
    this.getPopularMovies()
  }

  getPopularMovies() {
    this.tmdbService.getPopularMovies({
      page: 1,
      language: 'en-US'
    })
      .subscribe(
        (res) => {
          console.log(res)
        }
      )
  }
}
