import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../Config/config.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  error: string = '';
  mousePosition: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
      ),
    ]),
  });

  constructor(private apiService: ConfigService) {}

  handleButtonMove(event: any) {
    if (this.loginForm.invalid) {
      this.mousePosition = Math.round(Math.random() * 1000) + 'px';
    } else {
      this.mousePosition = '0px';
    }
  }

  get m() {
    return this.loginForm.controls;
  }

  handleSubmit() {
    this.error = '';
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    if (email && password) {
      this.apiService
        .PostLoginUser({ email_address: email, password: password })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.loginForm.reset();
            alert('successfully signined');
          },
          error: ({ error }) => {
            this.error = error?.error_description;
          },
        });
    }
  }
}
