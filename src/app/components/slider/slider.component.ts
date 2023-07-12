import {Component, inject, Input, TemplateRef} from '@angular/core';
import {CommonModule, NgIf, NgStyle} from '@angular/common';
import {ImagePipe} from "../../core/pipes";
import {Movie} from "../../core/interfaces/movie.interface";
import {ButtonComponent} from "../button/button.component";
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ImagePipe, ButtonComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  imagePipe: ImagePipe = new ImagePipe();

  _movie: Movie.Popular = {} as Movie.Popular;

  @Input({
    required: true
  }) set popularMovies(movie: Movie.Popular | Movie.Movie | null | undefined ) {
    if(!movie) return;
    this._movie = {
      ...movie,
      backdrop_path: this.imagePipe.transform(movie.backdrop_path, 'original')
    };
  };
  @Input() carousel?: TemplateRef<any>;

  get movie(): Movie.Popular {
    return this._movie;
  }
}
