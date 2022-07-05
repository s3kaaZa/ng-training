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
    this.isAuthenticationUser = authService.getCurrentUserName() ? true : false;
  }
  canActivate(): boolean {
    return this.isAuthenticationUser;
  }

  canActivateChild(): boolean {
    return this.isAuthenticationUser;
  }
  
}
