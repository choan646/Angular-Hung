import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss']
})
export class Day1Component implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log(this.movieService.listPhim)
  }

}
