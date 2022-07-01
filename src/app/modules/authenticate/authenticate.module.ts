import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component'; 
import { LoginFormComponent } from './login-form/login-form.component'; 
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginFormComponent,
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AuthenticateModule { }
