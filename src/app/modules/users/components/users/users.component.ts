import { Component, OnInit, ViewChildren } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserComponent } from 'src/app/modules/shared/components/user/user.component';
import { DataService } from '../../services/service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DataService]
})
export class UsersComponent implements OnInit {

  @ViewChildren('userCard') userCards!: UserComponent[];

  isLiked: boolean = false;
  usersHeader: string = 'Users:';
  users: IUser[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.users = this.dataService.getAllUsers();
  }
}
