import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
//import { LoginUsersService } from '../login-users.service';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../services/userAuthentication.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class AppRegisterPage implements OnInit {
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private userAuthentication: UserAuthenticationService,
    private router: Router //private userService: LoginUsersService
  ) {}
  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    confirmPassword: new FormControl(''),
    dateOfBirth: new FormControl(''),
    userName: new FormControl(''),
  });

  signUp(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const email = this.registerForm.get('email')?.value ?? '';
    var data_temp = {
      emailID: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      userName: this.registerForm.get('userName')?.value ?? '',
      firstName: this.registerForm.get('firstName')?.value ?? '',
      lastName: this.registerForm.get('lastName')?.value ?? '',
      phoneNumber: this.registerForm.get('phoneNumber')?.value ?? '',
      dateOfBirth: this.registerForm.get('dateOfBirth')?.value ?? '',
    };
    const isExists = this.userAuthentication.ValidateUserExists(email);

    if (isExists) {
      window.alert('User already exists!');
    } else {
      this.userAuthentication.AddNewUsers(data_temp);
    }
  }
  autoGenerateUSerName() {
    //call the function of repeat code.
    //first check username then @1/@2
    const fname = this.registerForm.get(['firstName'])?.value;
    const lname = this.registerForm.get(['lastName'])?.value;
    if (lname != '') {
      if (lname.length > 1) {
        var username = '';
        username += fname[0] + fname[1] + lname[0] + lname[1] + '@';
        var i = 1;
        while (true) {
          username += i;
          const isExists =
            this.userAuthentication.checkUserNameExists(username);
          if (!isExists) {
            this.registerForm.controls['userName'].setValue(username);
            break;
          }
          i += 1;
        }
      } else {
        var username = '';
        username += fname[0] + fname[1] + lname[0] + '@';
        var i = 1;
        while (true) {
          username += i;
          const isExists =
            this.userAuthentication.checkUserNameExists(username);
          if (!isExists) {
            this.registerForm.controls['userName'].setValue(username);
            break;
          }
          i += 1;
        }
      }
    } else {
      var username = '';
      username += fname[0] + fname[1] + '@';
      var i = 1;
      while (true) {
        username += i;
        const isExists = this.userAuthentication.checkUserNameExists(username);
        if (!isExists) {
          this.registerForm.controls['userName'].setValue(username);
          break;
        }
        i += 1;
      }
    }
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            Validators.pattern(
              /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9@][a-zA-Z0-9]$/
            ),
            Validators.pattern(/[a-zA-Z]/),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
          ],
        ],
        dateOfBirth: ['', [Validators.required], [this.dateOfBirthValidator()]],
        phoneNumber: [
          '',
          [
            Validators.required,
            //Validators.maxLength(10),
            Validators.pattern(/^[0-9]{10}$/),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            //Validators.maxLength(20),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            //Validators.maxLength(20),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            ),
          ],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  checkUsernameExists() {
    const username = this.registerForm.get('userName')?.value ?? '';
    if (
      username.length >= 3 &&
      username[0] != '@' &&
      username[username.length - 1] != '@'
    ) {
      const isExists = this.userAuthentication.checkUserNameExists(username);
      if (isExists) {
        this.registerForm.get('userName')?.setErrors({ userExists: true });
      } else {
        this.registerForm.get('userName')?.setErrors(null);
      }
    }
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  dateOfBirthValidator(): AsyncValidatorFn {
    //can add 18 year
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const selectedDate = new Date(control.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
          resolve({ invalidDateOfBirth: true });
        } else {
          resolve(null);
        }
      });
    };
  }
}
