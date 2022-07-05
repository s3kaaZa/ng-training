import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { SharedModule } from '../shared/shared.module';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';
import { CreateUserComponent } from './components/user-form/user-form.component';
import { CreateUserShellComponent } from './pages/create-form-shell/create-user-shell.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressComponent } from './components/address-form/address-form.component';
import { UserEditShellComponent } from './pages/edit-form-shell/edit-user-shell.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PreviewUserComponent } from './components/preview-user/preview-user.component';
import { PreviewUserShellComponent } from './pages/preview-user-shell/preview-user-shell.component';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { AgePipe } from 'src/app/pipes/age.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
    CreateUserComponent,
    CreateUserShellComponent,
    AddressesComponent,
    AddressComponent,
    UserEditShellComponent,
    PreviewUserComponent,
    PreviewUserShellComponent,
    FullNamePipe,
    AgePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    UsersRoutingModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
