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
  isVisibleAdd = false;
  isVisibleEdit = false;
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

  deleteMovie(i: number) {
    this.movieService.deleteMovie(i);
  }

  showModalForAdd(): void {
    this.isVisibleAdd = true;
  }
  showModalForEdit(): void {
    this.isVisibleEdit = true;
  }

  handleOkEdit(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisibleEdit = false;
      this.isOkLoading = false;
    }, 1200);
  }

  handleOkAdd(): void {
    this.movieService.triggerAdd.next(true);
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisibleAdd = false;
      this.isOkLoading = false;
    }, 1200);
  }

  handleCancel(): void {
    this.isVisibleAdd = false;
    this.isVisibleEdit = false;
  }
}
