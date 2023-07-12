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
  gridOptions: GridOptions;
  constructor(private userAuthentication: UserAuthenticationService) {
    this.users = this.userAuthentication.getUsers();
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      // enable filtering
      enableFilter: true,
    };
    this.gridOptions.columnDefs = [
      {
        headerName: 'First Name',
        field: 'firstName',
        width: 100,
      },
      {
        headerName: 'Last Name',
        field: 'lastName',
        width: 100,
      },
      {
        headerName: 'Email ID',
        field: 'emailID',
        width: 100,
      },
      {
        headerName: 'Date Of Birth',
        field: 'dateOfBirth',
        width: 100,
      },
      {
        headerName: 'Phone Number',
        field: 'phoneNumber',
        width: 100,
      },
    ];
    this.gridOptions.rowData = this.users;
  }
}
