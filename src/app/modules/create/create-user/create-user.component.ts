import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateUser } from '../interfaces/ICreateUser';
import { CreateService } from '../services/create.service';
import { UsersService } from '../../users/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent {
   _newUser!: ICreateUser;

  createUserForm: FormGroup = new FormGroup({
    "First name": new FormControl('', Validators.required),
    "Last name": new FormControl('', Validators.required),
    "Age": new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(130),
    ]),
    "Company": new FormControl('', Validators.required),
    "Department": new FormControl('', Validators.required),
  });


  constructor(
    private _createService: CreateService,
    private _userService: UsersService
  ) {
  }

  ngOnInit(): void {
    
  }

  submit() {
    this._newUser = this.createUserForm.value;
    this._createService.createUser(this._newUser);

    console.log(this._newUser);
    //this._createService.createUser('this.createUserForm.value')
    //this.createUserForm.reset();
  }

}
