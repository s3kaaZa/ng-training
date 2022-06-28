import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserShellComponent } from './modules/users/pages/create-form-shell/create-user-shell.component';
//import { UsersComponent } from './modules/users/components/users/users.component';
//import { CarsComponent } from './modules/cars/components/cars/cars.component';
import { UserEditShellComponent } from './modules/users/pages/edit-form-shell/edit-user-shell.component';
import { LeaveCreateFormGuard } from './core/guards/leave-create-form.guard';
import { LoginFormComponent } from './modules/auth/login-form/login-form.component';
import { RegistrationFormComponent } from './modules/auth/registration-form/registration-form.component';
import { HomePageComponent } from './modules/auth/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'create-user',
    component: CreateUserShellComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'user/edit/:id',
    component: UserEditShellComponent,
    canDeactivate: [LeaveCreateFormGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
