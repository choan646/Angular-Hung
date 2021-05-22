import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({});

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      account : new FormControl(null,[Validators.required, Validators.minLength(4), ]),
      password : new FormControl(null,[Validators.required, Validators.minLength(4),])
    });

  }

  login(form: FormGroup): void {
    // console.log(form)
    const value = form.value
    const objLogin = {
      taiKhoan: value.account,
      matKhau: value.password,
    };
    this.accountService.callLoginAPI(objLogin).subscribe((res) => {
      if (res) {
        console.log(res);
        localStorage.setItem('accountFE62', JSON.stringify(res));
        alert('Login successfully!');
      }
    });
  }

  get account() : AbstractControl | null {
    return this.loginForm.get('account');
  }
  get password() : AbstractControl | null {
    return this.loginForm.get('account');
  }
}
