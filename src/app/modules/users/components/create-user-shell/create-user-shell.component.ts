import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    console.log('shell formGroup = ', this.formGroup);
    
  }

  goToUsersPage() {
    console.log(this);
    
    //this.router.navigate(["/users"]);
  }
}
