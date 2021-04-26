import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComComponent } from './demo-com/demo-com.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LessonModule } from './lesson/lesson.module';
import { BaiTap2Module } from './bai-tap2/bai-tap2.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule,
    BaiTap2Module,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
