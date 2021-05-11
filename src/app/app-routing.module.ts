import { ProviderModule } from './provider/provider.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { Day1Component } from './lesson/day1/day1.component';
import { Day2Component } from './lesson/day2/day2.component';
import { Day3Component } from './lesson/day3/day3.component';
import { LessonComponent } from './lesson/lesson.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './provider/login/login.component';

const routes: Routes = [
  {
    path: '',
    component:LessonComponent
  },
  {
    path: 'lesson1',
    component: Day1Component,
  },
  {
    path: 'lesson2',
    component: Day2Component,
  },
  {
    path: 'lesson3',
    component: Day3Component,
  },
  {
    path: 'admin',
    loadChildren: ()=> AdminModule,
  },
  {
    path: 'client',
    loadChildren: ()=> ClientModule,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'404',
    component: PageNotFoundComponent
  },
  {path:'**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
