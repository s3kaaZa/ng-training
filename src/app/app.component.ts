import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  // life cycle study
  constructor() { this.log(`constructor`); }
  ngOnInit() { this.log(`onInit`); }

  ngOnDestroy() { this.log(`onDestroy`); }

  private log(msg: string) {
    console.log(msg);
  }
  // life cycle study

  cardModuleTitle = 'Employees:';
  inputModuleTitle = 'Input with TextArea:';
  showAll = true;
  showOnlyActivated = false;
}