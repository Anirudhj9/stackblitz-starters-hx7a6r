import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserAuthenticationService } from '../services/userAuthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AppLoginPage implements OnInit {
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userAuthenticationService: UserAuthenticationService
  ) {}
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9@][a-zA-Z0-9]$/
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }
  signIn() {
    const isValid = this.userAuthenticationService.ValidateUserCredentials(
      this.loginForm.get(['userName'])?.value,
      this.loginForm.get(['password'])?.value
    );
    if (isValid) {
      window.alert('user valid!');
    } else {
      window.alert('user not valid');
    }
  }
}
