import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressesComponent } from '../../components/addresses/addresses.component';
import { CreateUserComponent } from '../../components/user-form/user-form.component';
import { IUser } from '../../interfaces/IUser';
import { emailValidator } from '../../services/create-user.validator';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-edit-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class UserEditShellComponent implements OnInit {
  @ViewChild(CreateUserComponent, { static: false })
  private userForm!: CreateUserComponent;

  @ViewChild(AddressesComponent, { static: false })
  private addressesForm!: AddressesComponent;

  title: string = 'Edit user';
  public editedUserForm: FormGroup = new FormGroup({});
  user!: IUser | undefined;
  userId!: string | null;
  isInvalidForm: boolean = false;

  constructor(
    _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _usersService: UsersService,
  ) {
    this.editedUserForm = _formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        emailValidator(),
      ]],
      age: ['', [
        Validators.required,
        Validators.min(15),
        Validators.max(100),
      ]],
      companyName: ['', [
        Validators.required,
        Validators.maxLength(35)
      ]],
      department: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      gender: ['', [Validators.required]]
    });

    this.userId = this._route.snapshot.paramMap.get('id');
    this.user = this._usersService.getUserById(this.userId);
  }


  ngOnInit(): void {
  }

  updateUserData(event: Event): void {
    this._usersService.updateUser(this.userId, this.userForm.userForm.value, this.addressesForm.addressesArray.value)

    
    
    console.log(this);
    console.log(event);
  }

  log() {
    console.log(this);
  }
}