import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivatePage } from 'src/app/core/guards/leave-create-form.guard';
import { AddressesComponent } from '../../components/addresses/addresses.component';
import { CreateUserComponent } from '../../components/user-form/user-form.component';
import { IUser } from '../../interfaces/IUser';
import { emailValidator } from '../../services/create-user.validator';
import { UsersService } from '../../services/users.service';
import { CreateUserShellComponent } from '../create-form-shell/create-user-shell.component';

@Component({
  selector: 'app-user-edit-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class UserEditShellComponent implements OnInit, CanDeactivatePage, AfterContentInit {
  @ViewChild(CreateUserComponent, { static: false })
  private userForm!: CreateUserComponent;

  @ViewChild(AddressesComponent, { static: false })
  private addressesForm!: AddressesComponent;

  @ViewChild(CreateUserShellComponent, { static: false })
  private createUserShellComponent!: CreateUserShellComponent;

  public title: string = 'Edit user';
  public editedUserForm: FormGroup = new FormGroup({});
  public user$!: Observable<IUser | undefined>;
  public isInvalidForm: boolean = false;
  public isFormSubmited: boolean = false;
  private _userId!: string | null;

  constructor(
    _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _usersService: UsersService,
    public dialog: MatDialog,
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
  }

  ngOnInit(): void {    
    this._route.params.subscribe((data) => {
      this._userId = data['id'];
      this.user$ = this._usersService.getUserById(this._userId)
    });
  }

  ngAfterContentInit(): void {
    // console.log(this);

  }

  updateUserData(): void {
    this.isFormSubmited = true;
    this._usersService.updateUser(this._userId, this.userForm.userForm.value, this.addressesForm.addressesArray.value);
  }

  hasUnsavedData(): boolean | null {
    return this.userForm.userForm.dirty || this.addressesForm.addressesArray.dirty;
  }
}