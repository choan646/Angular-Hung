import { SignUpComponent } from './../sign-up/sign-up.component';
import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(
    component: SignUpComponent): boolean {
      const flat = component.isSubmitedForm();
      if (flat) {
        return true;
      }
      const confirmed = window.confirm('Co chac muon thoat ra khong?');
    return confirmed;
  }
  
}
