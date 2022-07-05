import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-preview-user-contacts',
  templateUrl: './preview-user-contacts.component.html',
  styleUrls: ['./preview-user-contacts.component.scss']
})
export class PreviewUserContactsComponent implements OnInit, OnChanges {
  @Input() user: IUser;

  addressLine: string = '';
  city: string = '';
  zip: number = 0;

  constructor() { }

  ngOnInit(): void {  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.addressLine = this.user.addresses[0].addressLine;
      this.city = this.user.addresses[0].city;
      this.zip = this.user.addresses[0].zip;
    }
  }
}
