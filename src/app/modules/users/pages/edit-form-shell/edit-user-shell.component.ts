import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  private _userId!: string;

  constructor(
    _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: UsersService,
    public dialog: MatDialog,
  ) {
    this.editedUserForm = _formBuilder.group({});
  }

  ngOnInit(): void {    
    this._route.params.subscribe((data) => {
      this._userId = data['id'];
      this.user$ = this._usersService.getUserById(this._userId)
    });
  }

  ngAfterContentInit(): void { }

  updateUserData(): void {
    this.isFormSubmited = true;
    this._usersService.updateUser(this._userId, this.userForm.userForm.value, this.addressesForm.addressesArray.value);
    this._router.navigate(["/users"]);
  }

  hasUnsavedData(): boolean | null {
    return this.userForm.userForm.dirty || this.addressesForm.addressesArray.dirty;
  }
}