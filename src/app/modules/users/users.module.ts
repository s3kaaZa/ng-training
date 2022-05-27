import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersShellComponent } from './models/users-shell/users-shell.component';
import { UsersListComponent } from './models/users-list/users-list.component'

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
