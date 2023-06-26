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
  addNewMovie() {}

  editMovie(data: Movie) {
    // this.movieService.Save(data);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
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
