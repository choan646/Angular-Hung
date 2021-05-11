import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent)
  itemMovieTagList!: QueryList<ItemMovieComponent>;

listMovie: any[] = [];

  listLikeMovies = [
    {
      id: '1',
      name: 'Than Chet',
      totalLike: 0,
    },
    {
      id: '2',
      name: 'Chi Muoi Ba',
      totalLike: 0,
    },
    {
      id: '3',
      name: 'Bo Gia',
      totalLike: 0,
    },
    {
      id: '4',
      name: 'Mortal Kombat',
      totalLike: 0,
    },
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.listMovie = this.movieService.listPhim;
  }

  invokeActionFromChild(eventvalue: any): void {
    // eventvalue.totalLike++;
    this.listLikeMovies.forEach((item) => {
      if (item.id === eventvalue.id) {
        item.totalLike++;
      }
    });
  }
  demoViewChildren(): void {
    this.itemMovieTagList.map((item) => {
      item.film.detail = 'view children';
    });
  }
}
