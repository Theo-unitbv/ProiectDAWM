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
  isVisibleDetails = false;
  isOkLoading = false;
  movieSelectedForDetails!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieList = this.movieService.movies;
  }

  movieAdded($event: Movie) {
    //todo api
    this.movieService.addMovie($event);
  }

  deleteMovie(i: number) {
    this.movieService.deleteMovie(i);
  }

  showModalDetails(data: Movie) {
    this.movieSelectedForDetails = data;
    this.isVisibleDetails = true;
  }

  showModalForAdd(): void {
    this.isVisibleAdd = true;
  }

  showModalForEdit(data: Movie): void {
    data.editable = true;
    this.isVisibleEdit = true;
  }

  handleOkEdit(): void {
    this.movieService.triggerEdit.next(true);
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

  handleCancelDetails() {
    this.isVisibleDetails = false;
  }

  sortByYear() {
    this.movieService.sortByYear();
  }
  sortByLength() {
    this.movieService.sortByLength();
  }
  sortByTitle() {
    this.movieService.sortByTitle();
  }
  sortByRating() {
    this.movieService.sortByRating();
  }
}
