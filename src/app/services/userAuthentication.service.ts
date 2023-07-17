//login : validate the user then avigate to home page.
//register: validate existance of user then add new user.

import { Injectable } from '@angular/core';
import { UserList } from '../../shared/userList.model';
import { UserAuth } from './userAuth.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(private userAuth: UserAuth) {}
  private UserDataList: UserList[] = [
    {
      emailID: 'user1@example.com',
      password: '@Password1',
      userName: 'USER@1',
      firstName: 'user1',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
    {
      emailID: 'user2@example.com',
      password: '@Password2',
      userName: 'USER@2',
      firstName: 'user2',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
    {
      emailID: 'user3@example.com',
      password: '@Password3',
      userName: 'USER@3',
      firstName: 'user3',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
    {
      emailID: 'user4@example.com',
      password: '@Password4',
      userName: 'USER@4',
      firstName: 'user4',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
  ];

  //signin
  ValidateUserCredentials(username: string, password: string): Boolean {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (
        this.UserDataList[i].userName == username &&
        this.UserDataList[i].password == password
      ) {
        this.userAuth.setAuthentication();
        return true;
      }
    }
    this.userAuth.unsetAuthentication();
    return false;
  }

  getUsers() {
    return this.UserDataList;
  }
  //signup
  AddNewUsers(data: UserList) {
    const emailID = data.emailID;
    const password = data.password;
    const userName = data.userName;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const dateOfBirth = data.dateOfBirth;
    const phoneNumber = data.phoneNumber;
    this.UserDataList.push({
      emailID,
      password,
      userName,
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
    });
    console.log(this.UserDataList);
    window.alert('New User added successfully');
  }
  //signup
  ValidateUserExists(emailID: string) {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (this.UserDataList[i].emailID == emailID) {
        return true;
      }
    }
    return false;
  }
  //signup
  checkUserNameExists(username: string) {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (this.UserDataList[i].userName == username) {
        return true;
      }
    }
    return false;
  }
}
