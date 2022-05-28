import { Component, ViewChildren } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { CardComponent } from 'src/app/modules/shared/components/card/card.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  @ViewChildren('userCard') userCards!: CardComponent[];

  isLiked: boolean = false;
  usersHeader: string = 'Users:';
  users: IUser[] = [];

  constructor() {
  }
}
