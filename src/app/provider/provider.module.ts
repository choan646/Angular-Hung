import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    MaterialModule
  ]
})
export class ProviderModule { }
