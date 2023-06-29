import { Component } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
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
  movies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe((data) => {
      this.movies$ = of(data);
    });
  }

  ngOnInit(): void {
    this.movieService.updateMovies.subscribe((_) => {
      this.movies$ = this.movieService.getMovies();
    });
  }

  onSearchMovieEntered(searchValue: string) {
    const filteredMovies$ = this.movies$.pipe(
      switchMap((movies) => {
        const filteredMovies = movies.filter((data) => {
          return data.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        return of(filteredMovies);
      })
    );
    this.movies$ = filteredMovies$;
  }

  resetSearch() {
    this.movieService.updateMovies.next(true);
  }

  movieAdded($event: Movie) {
    this.movieService.addMovie($event).subscribe(() => {
      this.movies$ = this.movieService.getMovies();
    });
  }

  deleteMovie(data: Movie) {
    this.movieService.deleteMovie(data.id).subscribe((_) => {
      this.movies$ = this.movieService.getMovies();
    });
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
    this.isVisibleDetails = false;
  }

  handleOkEdit(): void {
    this.movieService.triggerEdit.next(true);
    this.isOkLoading = true;
    this.isVisibleDetails = false;
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
    this.isVisibleDetails = false;
    this.isVisibleEdit = false;
  }

  handleCancelDetails() {
    this.isVisibleDetails = false;
  }

  sortByYear() {
    const sortedMovies$ = this.movies$.pipe(
      switchMap((movies) => {
        const sortedMovies = movies.sort((a, b) => {
          return a.year < b.year ? 1 : -1;
        });
        return of(sortedMovies);
      })
    );
    this.movies$ = sortedMovies$;
  }
  sortByLength() {
    const sortedMovies$ = this.movies$.pipe(
      switchMap((movies) => {
        const sortedMovies = movies.sort((a, b) => {
          return a.length < b.length ? 1 : -1;
        });
        return of(sortedMovies);
      })
    );
    this.movies$ = sortedMovies$;
  }
  sortByTitle() {
    const sortedMovies$ = this.movies$.pipe(
      switchMap((movies) => {
        const sortedMovies = movies.sort((a, b) => {
          return a.title < b.title ? 1 : -1;
        });
        return of(sortedMovies);
      })
    );
    this.movies$ = sortedMovies$;
  }
  sortByRating() {
    const sortedMovies$ = this.movies$.pipe(
      switchMap((movies) => {
        const sortedMovies = movies.sort((a, b) => {
          return a.rating < b.rating ? 1 : -1;
        });
        return of(sortedMovies);
      })
    );
    this.movies$ = sortedMovies$;
  }
}
