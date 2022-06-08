import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
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

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  toggleLike(user: IUser) {
    this.usersService.toggleLike(user.id);
    this.favoriteUsers = this.usersService.getFavoriteUsers();
  }
}
