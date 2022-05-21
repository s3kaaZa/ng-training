import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  showOnlyActivated = false;
  isHidden = false;

  @Input() user!: IUser;

  users: IUser[] = [
    {
      name: 'John',
      age: 30,
      activated: true
    },
    {
      name: 'Alex',
      age: 25,
      activated: true
    },
    {
      name: 'Linn',
      age: 48,
      activated: true
    },
    {
      name: 'Eliz',
      age: 14,
      activated: false
    },
  ]

  allUsers = this.users;

  toggleCard(user: IUser) {
    user.activated = !user.activated;
  }

  hideIfNonActiveCard() {
    this.showOnlyActivated = !this.showOnlyActivated;

    if (this.showOnlyActivated) {
      this.users = this.users.filter(user => user.activated);
    } else {
      this.users = this.allUsers;
    }
  }

  hideHiddenCard() {
    this.isHidden = !this.isHidden;
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
