import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  inputChanged!: string;
  users!: IUser[];

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    })
  }

  updateUserList(inputValue: string) {
    this._usersService.getUsers(inputValue).subscribe(users => {
      this.users = users;
    })
  }
}
