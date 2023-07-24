import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  isAbouteRoute: boolean = false;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.isAbouteRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'about';
      }
    })
  }
}
