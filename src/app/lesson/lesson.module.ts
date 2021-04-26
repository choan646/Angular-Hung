import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { Day1Component } from './day1/day1.component';
import { DataBindingComponent } from './day1/data-binding/data-binding.component';
import { OneWayComponent } from './day1/data-binding/one-way/one-way.component';
import { TwoWayComponent } from './day1/data-binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { Day2Component } from './day2/day2.component';
import { DirectivesComponent } from './day2/directives/directives.component';
import { StructuralDirectiveComponent } from './day2/directives/structural-directive/structural-directive.component';
import { NgIfComponent } from './day2/directives/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './day2/directives/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './day2/directives/structural-directive/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './day2/directives/attribute-directive/attribute-directive.component';
import { NgClassComponent } from './day2/directives/attribute-directive/ng-class/ng-class.component';
import { NgStyleComponent } from './day2/directives/attribute-directive/ng-style/ng-style.component';
import { HighLightDirective } from './day2/directives/custom-directive/high-light.directive';

@NgModule({
  declarations: [LessonComponent, Day1Component, DataBindingComponent, OneWayComponent, TwoWayComponent, Day2Component, DirectivesComponent, StructuralDirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent, AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HighLightDirective],
  imports: [CommonModule, FormsModule],
  exports: [LessonComponent],
})
export class LessonModule {}
