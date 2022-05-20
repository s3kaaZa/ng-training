import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputPlaceholder = 'Enter your text'
  inputTextPrimary = '';
  inputTextSecondary = '';
  inputTextThird = '';

  inputHandlerPrimary (event: any) {
    const value = event.target.value;
    this.inputTextPrimary = value;
  }

  inputHandlerSecondary (value: string) {
    this.inputTextSecondary = value;
  }

}
