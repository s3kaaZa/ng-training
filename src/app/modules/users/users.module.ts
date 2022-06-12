import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './components/users/users.component';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';
import { CreateUserComponent } from './components/user-form/user-form.component';
import { CreateUserShellComponent } from './pages/user-form-shell/create-user-shell.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressComponent } from './components/address-form/address-form.component';
import { UserEditShellComponent } from './pages/edit-user-shell/edit-user-shell.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
    CreateUserComponent,
    CreateUserShellComponent,
    AddressesComponent,
    AddressComponent,
    UserEditShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
