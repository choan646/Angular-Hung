import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShortCutPipe } from '../lesson/pipes/shortcut.pipe';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ShortCutPipe
  ],
  imports: [
    MaterialModule,FormsModule, ReactiveFormsModule
  ],
  exports:[ShortCutPipe],
})
export class ProviderModule { }
