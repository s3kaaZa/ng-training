import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-preview-user',
  templateUrl: './preview-user.component.html',
  styleUrls: ['./preview-user.component.scss']
})
export class PreviewUserComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void { }

}
