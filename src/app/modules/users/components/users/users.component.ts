import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { NewUser } from '../../services/transformUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  inputChanged!: string;
  users: IUser[] = [];

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.getUsers('', 2, 8)            
      .pipe(
        map((users: any) => {
          users.results.map((user: any) => {
            const newUser: any = new NewUser(user);
            console.log(newUser);
            this.users.push(newUser);
          })
        })
    )
    .subscribe((users: any) => {
        console.log(users)
    })

  }

  updateUserList(inputValue: string) {
    this._usersService.getUsers(inputValue, 1, 8).subscribe((users: IUser[]) => {
      this.users = users;
    })
  }
}
