import { Injectable } from '@angular/core';
import { ICreateUser } from '../interfaces/ICreateUser';
import { UsersService } from '../../users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private _userService: UsersService) { }

  createUser(user: ICreateUser) {
    this._userService.createNewUser(user);

    console.log(user);
    
  }
}
