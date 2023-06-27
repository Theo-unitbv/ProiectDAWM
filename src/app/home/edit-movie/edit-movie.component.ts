import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent {
  @Input() originalMovie!: Movie;
  title!: string;
  producer!: string;
  length!: number;
  year!: number;
  rating!: number;

  constructor(private movieService: MovieService) {}
}
