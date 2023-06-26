import { Component } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {
  title!: string;
  producer!: string;
  length!: number;
  year!: number;
  rating!: number;
}