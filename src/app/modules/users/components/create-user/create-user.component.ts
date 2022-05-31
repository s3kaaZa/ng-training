import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public gender: boolean = false;

  createUserForm: FormGroup = new FormGroup({
    "firstName": new FormControl('', Validators.required),
    "lastName": new FormControl('', Validators.required),
    "email": new FormControl('', Validators.required),
    "age": new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(130),
    ]),
    "company": new FormControl('', Validators.required),
    "department": new FormControl('', Validators.required),
    "gender": new FormControl(this.gender, Validators.required)
  });


  constructor(
    private _userService: UsersService
  ) {  }

  ngOnInit(): void { }

  submit() {
    this._userService.createNewUser(this.createUserForm.value);
  }
}
