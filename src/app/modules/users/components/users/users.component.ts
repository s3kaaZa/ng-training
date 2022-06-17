import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

  // MatPaginator Inputs
  public length: number = 128;
  public pageIndex: number = 1;
  public pageSize: number = 8;
  public pageSizeOptions: number[] = [8, 16, 32, 64];

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.getUsers('', this.pageIndex, this.pageSize)            
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

  paginatorClick(pageEvent: PageEvent) {
    this.length = pageEvent.length;
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    console.log(pageEvent);
    
    this._usersService.getUsers('', this.pageIndex, this.pageSize);
  }
}
