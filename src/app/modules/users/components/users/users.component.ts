import { Component, OnInit, ViewChildren } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { CardComponent } from 'src/app/modules/shared/components/card/card.component';
import { DataService } from '../../../services/data.service';
import { FavoriteService } from '../../../services/favorite.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DataService, FavoriteService]
})
export class UsersComponent implements OnInit {

  @ViewChildren('userCard') userCards!: CardComponent[];

  isLiked: boolean = false;
  usersHeader: string = 'Users:';
  users: IUser[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //this.getAllUsers();
    //console.log(this.users);
    
  }

  //getAllUsers(): void {
    //this.users = this.dataService.getAllUsers();
  //}
}
