import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-preview-user-personal',
  templateUrl: './preview-user-personal.component.html',
  styleUrls: ['./preview-user-personal.component.scss']
})
export class PreviewUserPersonalComponent implements OnInit, OnChanges {
  @Input() user: IUser;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  age: number = 0;

  constructor() { }

  ngOnInit(): void {  
    console.log('this.user = ', this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.age = this.user.age;
    }
  }
}
