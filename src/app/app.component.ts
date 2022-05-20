import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  cardModuleTitle = 'Employees:';
  inputModuleTitle = 'Input with TextArea:';
  showAll = true;
  showOnlyActivated = false;
}