import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit, OnDestroy {
  title!: string;
  producer!: string;
  length!: number;
  year!: number;
  rating!: number;
  sub!: Subscription;

  @Output() newMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private movieService: MovieService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.movieService.triggerAdd.subscribe((data) => {
      const movie: Movie = {
        title: this.title,
        producer: this.producer,
        length: this.length,
        year: this.year,
        rating: this.rating,
      };
      this.newMovie.emit(movie);
    });
  }
}
