import { Injectable } from '@angular/core';
import { IAuthUsers } from '../../authenticate/interfaces/IAuthUsers'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserName: string = '';

  authenticatedUsers: IAuthUsers[] = [{
    userName: 'userName', 
    pass: 'password'
  }];
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
    const authenticateUser = this.authenticatedUsers.filter((user) => user.userName === userName && user.pass === password);

    if (authenticateUser) {
      this.currentUserName = authenticateUser[0].userName;
    }

    return authenticateUser;
  }

  getCurrentUserName(): string {
    return this.currentUserName;
  }
}
