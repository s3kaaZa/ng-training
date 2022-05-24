import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user!: IUser;
  @Input() isShowUsersNgIf!: boolean;
  @Input() isShowHiddenUsers!: boolean;
  @Input() deactivatedAge!: number;

  @Output() sendUser = new EventEmitter<IUser>();

  sendOutgoingEvent(user: IUser) {
    this.sendUser.emit(user);
  }

  toggleCard(user: IUser) {
    this.user.activated = !this.user.activated;
  }

  checkUserAge(): boolean {
    return this.user.age >= this.deactivatedAge;
  }
}
