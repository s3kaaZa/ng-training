import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public createUserForm!: FormGroup;
  public gender: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UsersService,
  ) { 
    this.createUserForm = formBuilder.group({
      "firstName": ['', [Validators.required]],
      "lastName": ['', [Validators.required]],
      "email": ['', [Validators.required]],
      "age": ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(130),
      ]],
      "company": ['', [Validators.required]],
      "department": ['', Validators.required],
      "gender": ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  submit() {
    this._userService.createNewUser(this.createUserForm.value);
  }
}
