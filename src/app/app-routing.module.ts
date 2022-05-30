import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './modules/create/create-user/create-user.component';
import { UsersComponent } from './modules/users/components/users/users.component';
import { CarsComponent } from './modules/cars/components/cars/cars.component';

const routes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
