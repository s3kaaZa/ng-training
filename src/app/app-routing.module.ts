import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/authenticate/login-form/login-form.component';
import { RegistrationFormComponent } from './modules/authenticate/registration-form/registration-form.component';
import { HomePageComponent } from './modules/authenticate/home-page/home-page.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { AuthUserGuard } from './modules/core/guards/auth-user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    children: [
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
    ]
  },

  {
    path: '',
    canActivateChild: [AuthUserGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module')
          .then(m => m.UsersModule),
      },
      {
        path: 'cars',
        loadChildren: () => import('./modules/cars/cars.module')
          .then(m => m.CarsModule),
      },
    ]
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
