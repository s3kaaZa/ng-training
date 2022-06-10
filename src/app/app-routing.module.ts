import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { CreateUserShellComponent } from './modules/users/pages/user-form-shell/create-user-shell.component';
import { UsersComponent } from './modules/users/components/users/users.component';
import { CarsComponent } from './modules/cars/components/cars/cars.component';
import { UserEditShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create-user', component: CreateUserShellComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'user/edit/:id', component: UserEditShellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
