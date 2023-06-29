import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit, OnDestroy {
  @Input() originalMovie!: Movie;
  title!: string;
  producer!: string;
  length!: number;
  year!: number;
  rating!: number;
  sub!: Subscription;

  constructor(private movieService: MovieService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.movieService.triggerEdit.subscribe((data) => {
      const movie: Movie = {
        id: this.originalMovie.id,
        title: this.title || this.originalMovie.title,
        producer: this.producer || this.originalMovie.producer,
        length: this.length || this.originalMovie.length,
        year: this.year || this.originalMovie.year,
        rating: this.rating || this.originalMovie.rating,
        editable: false,
      };
      this.movieService.editMovie(movie).subscribe((_) => {
        this.movieService.updateMovies.next(true);
      });
    });
  }
}
