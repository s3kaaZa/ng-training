import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveCreateFormGuard } from '../core/guards/leave-create-form.guard';
import { UsersComponent } from './components/users/users.component';
import { CreateUserShellComponent } from './pages/create-form-shell/create-user-shell.component';
import { UserEditShellComponent } from './pages/edit-form-shell/edit-user-shell.component';
import { PreviewUserShellComponent } from './pages/preview-user-shell/preview-user-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'add',
    component: CreateUserShellComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditShellComponent,
    canDeactivate: [LeaveCreateFormGuard],
  },
  {
    path: 'preview/:id',
    component: PreviewUserShellComponent,
/*     children: [
      {
        path: 'contacts',
        component: PreviewUserComponent,
      },
      {
        path: 'personal',
        component: PreviewUserComponent,
      },
      {
        path: 'location',
        component: PreviewUserComponent,
      },
    ]
 */  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }