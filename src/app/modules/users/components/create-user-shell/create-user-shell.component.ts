import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {
  createUserForm: FormGroup = new FormGroup({});

  constructor(
    private _router: Router,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    console.log('shell formGroup = ', this.createUserForm);
  }

  goToUsersPage() {
    this._userService.createNewUser(this.createUserForm.value.user);    
    this._router.navigate(["/users"]);
  }
}
