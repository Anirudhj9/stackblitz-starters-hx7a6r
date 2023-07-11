import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../services/userAuthentication.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class AppHomePage implements OnInit {
  constructor(private userAuthentication: UserAuthenticationService) {}
  public users: any[] = [];
  ngOnInit() {
    this.users = this.userAuthentication.getUsers();
  }
}
