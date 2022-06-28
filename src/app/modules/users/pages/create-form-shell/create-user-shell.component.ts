import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {
  userName: string = '';
  title: string = 'Create user';
  createUserForm: FormGroup = new FormGroup({});
  isInvalidForm: boolean = false;

  constructor(
    private router: Router,
    private userService: UsersService,
    private authService: AuthenticationService,
  ) { 
    this.userName = authService.getCurrentUserName();
  }

  ngOnInit(): void { }

  goToUsersPage(event: Event) {
    this.createUserForm.markAllAsTouched();

    if (this.createUserForm.status === 'VALID'){
      this.isInvalidForm = false;
      this.userService.createNewUser(this.createUserForm.value.user, this.createUserForm.value.addresses);    
      this.router.navigate(["/users"]);
    } else {
      event.preventDefault();
      this.isInvalidForm = true;
    }
  }

  onCreateUserPage(key: string, userForm: FormGroup): void {
    this.createUserForm.addControl(key, userForm);
  }
}
