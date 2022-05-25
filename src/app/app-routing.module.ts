import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './modules/users/components/users/users.component';

const routes: Routes = [
  //{path: '', component: MainComponent},
  {path: 'USERS', component: UsersComponent},
  //{path: 'CARS', component: CarComponents},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
