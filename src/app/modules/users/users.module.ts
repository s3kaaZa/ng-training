import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersShellComponent } from './models/users-shell/users-shell.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersShellComponent,
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
