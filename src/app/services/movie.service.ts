import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import movieData from './movies.json';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = movieData;
  triggerAdd: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
  deleteMovie(i: number) {
    this.movies.splice(i, 1);
  }
}
