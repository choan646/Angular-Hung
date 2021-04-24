import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComComponent } from './demo-com/demo-com.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LessonModule } from './lesson/lesson.module';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComComponent,
    HelloWorldComponent,
    BaiTap2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
