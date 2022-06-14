import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserShellComponent } from './modules/users/pages/create-form-shell/create-user-shell.component';
import { UsersComponent } from './modules/users/components/users/users.component';
import { CarsComponent } from './modules/cars/components/cars/cars.component';
import { UserEditShellComponent } from './modules/users/pages/edit-form-shell/edit-user-shell.component';
import { LeaveCreateFormGuard } from './core/guards/leave-create-form.guard';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create-user', component: CreateUserShellComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'user/edit/:id', component: UserEditShellComponent, canDeactivate: [LeaveCreateFormGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
