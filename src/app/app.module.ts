import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';

import { HeaderComponent } from './modules/shared/components/header/header.component';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RegistrationFormComponent } from './modules/auth/registration-form/registration-form.component';
import { LoginFormComponent } from './modules/auth/login-form/login-form.component';
import { HomePageComponent } from './modules/auth/home-page/home-page.component';
import { AuthUserGuard } from './core/guards/auth-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    HomePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    UsersModule,
  ],
  providers: [
    AuthUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }