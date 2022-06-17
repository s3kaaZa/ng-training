import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  inputChanged!: string;
  users: IUser[] = [];
  foundUsers: IUser[] | undefined = undefined;

  // MatPaginator Inputs
  public length: number = 128;
  public pageIndex: number = 0;
  public pageSize: number = 8;
  public pageSizeOptions: number[] = [8, 16, 32, 64];

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users = this._usersService.getLockalUsers();

    if(!this.users.length) this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers(this.pageIndex, this.pageSize)            
      .subscribe((users: IUser[]) => {
          this.users = users;
      })
  }

  updateUserList(inputValue: string) {
    if (!inputValue){
      this.foundUsers = undefined;
    } else {
      this.foundUsers = this.users.filter((user: IUser) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(inputValue));
    }
  }

  paginatorClick(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    console.log(pageEvent);
    
    this._usersService.getUsers(this.pageIndex, this.pageSize)            
      .subscribe((users: IUser[]) => {
          this.users = users;
      }
    );
  }
}
