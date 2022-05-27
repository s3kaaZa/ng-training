import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Favorite } from 'src/app/modules/shared/enums/favorite';
import { UsersService } from '../../services/users.service';
import { FavoriteService } from 'src/app/modules/services/favorite.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {

  users: IUser[] = [];
  private favoriteIds: Array<string> = [];

  constructor(
    private favoriteService: FavoriteService, 
    private usersService: UsersService
  ) { }
  

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }

  
  addToFavorit() {
    this.favoriteIds = this.favoriteService.getFavorites(Favorite.User);
    console.log(this.favoriteIds);
    this.usersService.getFavorites(this.favoriteIds)
  }

}
