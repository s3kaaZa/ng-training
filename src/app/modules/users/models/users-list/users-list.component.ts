import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { FavoriteService } from 'src/app/modules/services/favorite.service';
import { UsersService } from '../../services/users.service';
import { Favorite } from 'src/app/modules/shared/enums/favorite';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users!: IUser[];

  isLiked: boolean = false;
  entity!: IUser;

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
  }

  addLike(user: IUser) {
    this.favoriteService.addToFavorite(user, Favorite.User);
  }
}
