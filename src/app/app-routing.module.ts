import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserShellComponent } from './modules/users/pages/create-form-shell/create-user-shell.component';
//import { UsersComponent } from './modules/users/components/users/users.component';
//import { CarsComponent } from './modules/cars/components/cars/cars.component';
import { UserEditShellComponent } from './modules/users/pages/edit-form-shell/edit-user-shell.component';
import { LeaveCreateFormGuard } from './core/guards/leave-create-form.guard';
import { LoginFormComponent } from './modules/authenticate/login-form/login-form.component';
import { RegistrationFormComponent } from './modules/authenticate/registration-form/registration-form.component';
import { HomePageComponent } from './modules/authenticate/home-page/home-page.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { AuthUserGuard } from './core/guards/auth-user.guard';

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
    component: HomePageComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'create-user',
    component: CreateUserShellComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module')
      .then(m => m.UsersModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'cars',
    loadChildren: () => import('./modules/cars/cars.module')
      .then(m => m.CarsModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'user/edit/:id',
    component: UserEditShellComponent,
    canDeactivate: [LeaveCreateFormGuard],
    canActivate: [AuthUserGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
