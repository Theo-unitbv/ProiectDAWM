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
  triggerEdit: Subject<boolean> = new Subject<boolean>();
  updateMovies: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
  deleteMovie(i: number) {
    this.movies.splice(i, 1);
  }
  sortByYear() {
    this.movies.sort((a, b) => {
      return a.year < b.year ? 1 : -1;
    });
  }
  sortByRating() {
    this.movies.sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
    });
  }
  sortByTitle() {
    this.movies.sort((a, b) => {
      return a.title < b.title ? 1 : -1;
    });
  }
  sortByLength() {
    this.movies.sort((a, b) => {
      return a.length < b.length ? 1 : -1;
    });
  }
}
