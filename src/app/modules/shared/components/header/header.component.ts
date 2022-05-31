import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('users') usersButton!: ElementRef<HTMLAreaElement>;

  constructor() { 
  }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log(this.usersButton);
  }

}
