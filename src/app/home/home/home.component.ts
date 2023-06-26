import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movieList!: Movie[];
  isVisible = false;
  isOkLoading = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieList = this.movieService.movies;
  }

  movieAdded($event: Movie) {
    //todo api
    this.movieService.addMovie($event);
  }

  editMovie(data: Movie, i: number) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.movieService.triggerAdd.next(true);
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1200);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
