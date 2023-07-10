//login : validate the user then avigate to home page.
//register: validate existance of user then add new user.

import { Injectable } from '@angular/core';
import { UserList } from '../../shared/userList.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor() {}
  private UserDataList: UserList[] = [
    {
      emailID: 'user1@example.com',
      password: '@Password1',
      userName: 'user@1',
      firstName: 'user1',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
    {
      emailID: 'user2@example.com',
      password: '@Password2',
      userName: 'user@2',
      firstName: 'user2',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
    {
      emailID: 'user3@example.com',
      password: '@Password3',
      userName: 'user@3',
      firstName: 'user3',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '8080880880',
    },
  ];

  ValidateUserCredentials(email: string, password: string): Boolean {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (
        this.UserDataList[i].emailID === email &&
        this.UserDataList[i].password === password
      ) {
        return true;
      }
    }
    return false;
  }

  getUsers() {
    return this.UserDataList;
  }

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

  ValidateUserExists(emailID: string) {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (this.UserDataList[i].emailID === emailID) {
        return true;
      }
    }
    return false;
  }

  checkUserNameExists(username: string) {
    for (var i = 0; i < this.UserDataList.length; i++) {
      if (this.UserDataList[i].userName === username) {
        return true;
      }
    }
    return false;
  }
}
