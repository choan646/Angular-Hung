import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-test',
  templateUrl: './movies-test.component.html',
  styleUrls: ['./movies-test.component.scss']
})
export class MoviesTestComponent implements OnInit {

  listPhim:any[]= [];

  constructor(private moviesTest: MovieService) { }

  ngOnInit(): void {
    this.moviesTest.getDataMovies().subscribe((res) => {
      this.listPhim = res;
      // console.log(this.listPhim);

    })
  }

}
