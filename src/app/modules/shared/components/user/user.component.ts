import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() likeCard = new EventEmitter<UserComponent>();

  sendLike (this: UserComponent) {
    this.likeCard.emit(this);
    console.log(this);
/*     if (!event.currentTarget.dataset.isLiked) {
      event.currentTarget.classList.add('mat-warn');
      event.currentTarget.setAttribute('color', 'warn');
      event.currentTarget.dataset.isLiked = !event.currentTarget.dataset.isLiked;
    } else {
      event.currentTarget.classList.remove('mat-warn');
      event.currentTarget.removeAttribute('color');
      event.currentTarget.dataset.isLiked = '';
    }
 */    
    
  }
}
