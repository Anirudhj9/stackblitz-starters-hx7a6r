import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserAuthenticationService } from '../services/userAuthentication.service';
import { Router } from '@angular/router';
import { UserList } from '../../shared/userList.model';

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
    emailID: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      password: ['', Validators.required],
    });
  }
  signIn() {
    const isValid = this.userAuthenticationService.ValidateUserCredentials(
      this.loginForm.get(['email'])?.value,
      this.loginForm.get(['password'])?.value
    );
    if (isValid) {
      window.alert('user valid!');
    } else {
      window.alert('user not valid');
    }
  }
}
