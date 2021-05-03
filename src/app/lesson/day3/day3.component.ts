import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss'],
})
export class Day3Component implements OnInit {
  @ViewChild(ListMovieComponent) listMovieTag!: ListMovieComponent;

  constructor() {}

  ngOnInit(): void {}

  addMovie(
    idMovie: string,
    nameMovie: string,
    priceMovie: string,
    imgMovie: string
  ): void {
    const objNewMovie = {
      id: idMovie,
      name: nameMovie,
      price: priceMovie,
      detail: 'test movie detail',
      imgUrl: imgMovie,
    };
    this.listMovieTag.listMovie.push(objNewMovie);
  }
}
