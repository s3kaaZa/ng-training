import { Injectable } from '@angular/core';
import { IAuthUsers } from '../../auth/interfaces/IAuthUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserName: string = '';

  authenticatedUsers: IAuthUsers[] = [];
  constructor() { }

  saveNewUser(userName: string, pass: string) {
    const newUser = {
      userName: userName, 
      pass: pass
    }
    
    this.currentUserName = newUser.userName;
    this.authenticatedUsers.push(newUser);
  }

  authenticationUser(userName: string, password: string): IAuthUsers[] | null {
    return this.authenticatedUsers.filter((user: IAuthUsers) => user.userName === userName && user.pass === password)
  }

  getCurrentUserName(): string {
    return this.currentUserName;
  }
}
