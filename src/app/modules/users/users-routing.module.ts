import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveCreateFormGuard } from '../core/guards/leave-create-form.guard';
import { UsersTableLocalComponent } from './components/users-table-local/users-table-local.component';
import { UsersTableServerComponent } from './components/users-table-server/users-table-server.component';
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
 */ 
  },
  {
    path: 'table-without-server-pagination',
    component: UsersTableLocalComponent,
    canDeactivate: [LeaveCreateFormGuard],
  },
  {
    path: 'table-with-server-pagination',
    component: UsersTableServerComponent,
    canDeactivate: [LeaveCreateFormGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }