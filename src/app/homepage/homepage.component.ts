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
  constructor(private userAuthentication: UserAuthenticationService) {
    this.users = this.userAuthentication.getUsers();
  }
}
