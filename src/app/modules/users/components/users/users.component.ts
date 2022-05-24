import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  deactivatedAge: number = 18;
  isShowUsersNgIf: boolean = false;
  isShowHiddenUsers: boolean = false;
  isShowUsersView: boolean = false;
  usersHeader: string = 'Users:';
  users: IUser[] = [];
  activatedUsers: IUser[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.users = this.dataService.getAllUsers();
  }

  showActivatedUsersNgIf(): void {
    this.isShowUsersNgIf = !this.isShowUsersNgIf;
  }

  showActivatedUsersHidden(): void {
    this.isShowHiddenUsers = !this.isShowHiddenUsers;
  }

  showActivatedUsersView(): void {
    this.users = [];
    this.isShowUsersView = !this.isShowUsersView;

    if (!this.isShowUsersView) {
      this.getAllUsers(); 
    } else {
      this.userCards.forEach((userCard: UserComponent) => {
        if (this.isShowUsersView && (userCard.user.activated || !userCard.checkUserAge())) {
          this.users.push(userCard.user);
        }
      })
    }
  }

  logUser(user: IUser) {
    this.dataService.log(user);
  }
}
