import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Movie} from "../interfaces";
import {ApiResponse} from "../interfaces/api-response.interface";

@Injectable({
  providedIn: 'root'
})
export class TmdbService extends BaseService{

  getPopularMovies(params: {
    page?: number
    language?: string
  }): Observable<ApiResponse<Movie.Popular>> {
    return this.get<ApiResponse<Movie.Popular>>('movie/popular', params);
  }

}
