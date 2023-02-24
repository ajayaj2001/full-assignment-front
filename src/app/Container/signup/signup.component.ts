import { Component } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  error: string = '';

  constructor(private apiService: ConfigService, private router: Router) {}
  signupForm = new FormGroup({
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
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get m() {
    return this.signupForm.controls;
  }

  handleSubmit() {
    this.error = '';
    let email = this.signupForm.value.email;
    let password = this.signupForm.value.password;

    if (email && password) {
      this.apiService
        .PostRegisterUser({ email_address: email, password: password })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.signupForm.reset();
            alert('created successfully');
            this.router.navigate(['/']);
          },
          error: ({ error }) => {
            this.error = error?.error_description;
          },
        });
      console.log('test');
    }
  }
}
