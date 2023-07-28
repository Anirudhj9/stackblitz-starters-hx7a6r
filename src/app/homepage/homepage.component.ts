import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../services/userAuthentication.service';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-mainpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class AppHomePage {
  public users: any[] = [];
  displayedColumns = ['firstName', 'lastName', 'phoneNumber', 'dateOfBirth'];

  constructor(private userAuthentication: UserAuthenticationService) {
    this.users = this.userAuthentication.getUsers();
  }
}
