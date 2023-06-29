import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  enteredSearchMovie: string = '';
  sub!: Subscription;
  @Output()
  searchMovieEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.sub = this.movieService.updateMovies.subscribe((_) => {
      this.enteredSearchMovie = '';
    });
  }

  onSearchMovie() {
    this.searchMovieEmitter.emit(this.enteredSearchMovie);
  }
}
