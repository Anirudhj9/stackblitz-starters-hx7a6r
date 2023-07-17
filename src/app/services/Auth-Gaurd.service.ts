import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuth } from './userAuth.service';
import { UserAuthenticationService } from './userAuthentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAuth) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        return false;
      }
    });
  }
}
