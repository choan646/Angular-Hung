import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { Day1Component } from './day1/day1.component';
import { DataBindingComponent } from './day1/data-binding/data-binding.component';
import { OneWayComponent } from './day1/data-binding/one-way/one-way.component';
import { TwoWayComponent } from './day1/data-binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LessonComponent, Day1Component, DataBindingComponent, OneWayComponent, TwoWayComponent],
  imports: [CommonModule, FormsModule],
  exports: [LessonComponent],
})
export class LessonModule {}
