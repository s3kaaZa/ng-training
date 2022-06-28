import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  isAuthenticationUser: boolean = false;

  constructor(
    authService: AuthenticationService
  ) {
    this.isAuthenticationUser = authService.getCurrentUserName() ? true : false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticationUser;
  }
  
}
