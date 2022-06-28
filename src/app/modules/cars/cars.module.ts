import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './components/cars/cars.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarsShellComponent } from './models/cars-shell/cars-shell.component';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  declarations: [
    CarsComponent,
    CarsShellComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    CarsRoutingModule,
  ],
  exports: [
    CarsComponent
  ]
})
export class CarsModule { }
