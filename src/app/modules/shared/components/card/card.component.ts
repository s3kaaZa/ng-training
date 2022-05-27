import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { ICar } from 'src/app/modules/cars/interfaces/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() entity!: IUser | ICar;

  @Output() sendLike = new EventEmitter<IUser | ICar>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike() {
    this.sendLike.emit();
  }
}
