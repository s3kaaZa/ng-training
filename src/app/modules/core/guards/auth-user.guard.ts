import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate, CanActivateChild {
  isAuthenticationUser: boolean = false;

  constructor(
    authService: AuthenticationService
  ) {
    //this.isAuthenticationUser = authService.getCurrentUserName() ? true : false;
    this.isAuthenticationUser = true;
  }
  canActivate(): boolean {
    //return this.isAuthenticationUser;
    return true;
  }

  canActivateChild(): boolean {
    //return this.isAuthenticationUser;
    return true;
  }
  
}
