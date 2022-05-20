import { Component, Input } from '@angular/core';

export interface Employees {
  name: string,
  age: number,
  activated: boolean
}

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

  employees: Employees[] = [
    {
      name: 'John',
      age: 30,
      activated: true
    },
    {
      name: 'Alex',
      age: 25,
      activated: true
    },
    {
      name: 'Linn',
      age: 48,
      activated: true
    },
    {
      name: 'Eliz',
      age: 14,
      activated: false
    },
  ]

  allEmployees = this.employees;

  hideIfNonActiveCard() {
    this.showOnlyActivated = !this.showOnlyActivated;

    if (this.showOnlyActivated) {
      this.employees = this.employees.filter(employee => employee.activated);
    } else {
      this.employees = this.allEmployees;
    }
    console.log(this);
    
  }

  hideHiddenCard() {
    console.log(this)
  }
}
