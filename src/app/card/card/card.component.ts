import { Component, Input, OnInit } from '@angular/core';
import { Employees } from 'src/app/app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() card!: Employees;

  toggleCard() {
    console.log(this.card.activated);
    
    this.card.activated = !this.card.activated
  }
}
