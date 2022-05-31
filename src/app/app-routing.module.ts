import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserShellComponent } from './modules/users/models/create-user-shell/create-user-shell.component';
import { UsersComponent } from './modules/users/components/users/users.component';
import { CarsComponent } from './modules/cars/components/cars/cars.component';

const routes: Routes = [
  {path: 'create-user', component: CreateUserShellComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
