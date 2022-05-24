import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: IUser[] = [
    {
      name: 'John',
      age: 30,
      activated: true
    },
    {
      name: 'Alex',
      age: 25,
      activated: true
    },
    {
      name: 'Linn',
      age: 48,
      activated: false
    },
    {
      name: 'Eliz',
      age: 12,
      activated: true
    },
  ]

  getAllUsers(): IUser[] {
    return this.users;
  }

  getActivatedUsers(): IUser[] {
    return this.users.filter(user => user.activated || user.age < 14);
  }

  log(user: IUser) {
    console.log(user)
  }
}
