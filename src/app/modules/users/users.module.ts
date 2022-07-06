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
import { PreviewUserShellComponent } from './pages/preview-user-shell/preview-user-shell.component';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { AgePipe } from 'src/app/pipes/age.pipe';
import { PreviewUserLocationComponent } from './components/preview-user-location/preview-user-location.component';
import { PreviewUserContactsComponent } from './components/preview-user-contacts/preview-user-contacts.component';
import { PreviewUserPersonalComponent } from './components/preview-user-personal/preview-user-personal.component';
import { UsersTableLocalComponent } from './components/users-table-local/users-table-local.component';
import { UsersTableServerComponent } from './components/users-table-server/users-table-server.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
    CreateUserComponent,
    CreateUserShellComponent,
    AddressesComponent,
    AddressComponent,
    UserEditShellComponent,
    PreviewUserShellComponent,
    FullNamePipe,
    AgePipe,
    PreviewUserLocationComponent,
    PreviewUserContactsComponent,
    PreviewUserPersonalComponent,
    UsersTableLocalComponent,
    UsersTableServerComponent
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
