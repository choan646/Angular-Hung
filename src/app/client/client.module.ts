import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from '../client/client.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { MoviesTestComponent } from './movies-test/movies-test.component';
import { CardMovieComponent } from './card-movie/card-movie.component';

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'aboutus',
        component: AboutUsComponent,
      },
      {
        path: 'movies',
        component:MoviesTestComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    AboutUsComponent,
    MoviesTestComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  // providers://neu k xai root thi xai o dau khai bao o day
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
