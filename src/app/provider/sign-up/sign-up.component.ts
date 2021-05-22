import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, AfterViewInit {
  @ViewChild('registerForm') registerFormTag: any;

  regexEmail =
    '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i';

  constructor(private accountSer: AccountService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.registerFormTag);
  }

  register(form: any): void {
    console.log(form);
    const { value } = form; // destructure object
    const objNewSignUp = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDt: value.phoneNumber,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: value.fullName,
    };
    this.accountSer.callSignUpAPI(objNewSignUp).subscribe((res) => {
      if (res) {
        alert('Sign up successfully!');
      }
    });
  }

  isSubmitedForm():boolean {
    return this.registerFormTag.submitted;
  }
}
