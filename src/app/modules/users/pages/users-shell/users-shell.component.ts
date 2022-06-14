import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFavorite } from 'src/app/modules/shared/interfaces/IFavorite';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  users: IUser[] = [];
  favoriteUsers: IUser[] = [];
  isLike: boolean = false;
  editedUser!: any;

  constructor(
    private _usersService: UsersService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  toggleLike(user: IUser): void {
    this._usersService.toggleLike(user.id);
    this._usersService.getFavoriteUsers().subscribe((favoriteUsers: IUser[]) => {
      this.favoriteUsers = favoriteUsers;
    });
  }

  editUser(user: IUser): void {
    const url: string = '/user/edit/' + user.id;
    this._router.navigateByUrl(url);  
  }
}
