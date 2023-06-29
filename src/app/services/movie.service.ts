import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../models/movie';
// import movieData from './movies.json';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies!: Movie[];
  triggerAdd: Subject<boolean> = new Subject<boolean>();
  triggerEdit: Subject<boolean> = new Subject<boolean>();
  updateMovies: Subject<boolean> = new Subject<boolean>();
  baseURL = 'http://localhost:5156/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL + '/Movies');
  }

  editMovie(movie: Movie) {
    const putUrl = this.baseURL + `/Movies/update/${movie.id}`;

    return this.httpClient.put<Movie>(putUrl, movie, this.httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    // this.movies.push(movie);
    return this.httpClient.post<Movie>(
      this.baseURL + '/Movies',
      movie,
      this.httpOptions
    );
  }
  deleteMovie(id: any) {
    const deleteUrl = this.baseURL + `/Movies/${id}`;

    return this.httpClient.delete(deleteUrl, this.httpOptions);
  }
}
