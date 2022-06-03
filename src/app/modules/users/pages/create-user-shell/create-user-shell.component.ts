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
  isInvalidForm: boolean = false;

  constructor(
    private _router: Router,
    private _userService: UsersService
  ) { }

  ngOnInit(): void { }

  goToUsersPage(event: Event) {
    if (this.createUserForm.status === 'VALID'){
      this.isInvalidForm = false;
      this._userService.createNewUser(this.createUserForm.value.user);    
      this._router.navigate(["/users"]);
    } else {
      event.preventDefault();
      this.isInvalidForm = true;
    }
  }
}
