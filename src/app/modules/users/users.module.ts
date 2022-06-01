import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './components/users/users.component';
import { UsersShellComponent } from './models/users-shell/users-shell.component';
import { CreateUserComponent } from './models/create-user/create-user.component';
import { CreateUserShellComponent } from './components/create-user-shell/create-user-shell.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
    CreateUserComponent,
    CreateUserShellComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
