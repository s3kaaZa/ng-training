import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
