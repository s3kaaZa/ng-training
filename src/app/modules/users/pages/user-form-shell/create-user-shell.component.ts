import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {
  @Input() addressesFormCreated!: FormArray;
  title: string = 'Create user';
  createUserForm: FormGroup = new FormGroup({});
  isInvalidForm: boolean = false;

  constructor(
    private _router: Router,
    private _userService: UsersService
  ) { }

  ngOnInit(): void { }

  goToUsersPage(event: Event) {
    this.createUserForm.markAllAsTouched();

    if (this.createUserForm.status === 'VALID'){
      this.isInvalidForm = false;
      this._userService.createNewUser(this.createUserForm.value.user, this.createUserForm.value.addresses);    
      this._router.navigate(["/users"]);
    } else {
      event.preventDefault();
      this.isInvalidForm = true;
    }
  }

  onCreateUserPage(key: string, userForm: FormGroup): void {
    this.createUserForm.addControl(key, userForm)
  }
  
  log() {
    console.log(this);
    
  }
}
