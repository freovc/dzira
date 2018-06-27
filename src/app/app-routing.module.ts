import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './views/error404.component';
import { AuthenticateComponent } from './views/users/components/authenticate/authenticate.component';
import { UserCreatedComponent } from './views/users/components/user-created/user-created.component';
import { UserWorkComponent } from './views/users/components/user-work/user-work.component';
import { ConfirmDeleteDialogComponent } from './views/users/confirm-delete-dialog/confirm-delete-dialog.component';
import { ManageUsersPageComponent } from './views/users/containers/manage-users-page/manage-users-page.component';
import { UserFormPageComponent } from './views/users/containers/user-form-page/user-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/mywork', pathMatch: 'full' },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    children: [
      { path: 'mywork', component: UserWorkComponent },
      { path: 'authenticate', component: AuthenticateComponent },
      { path: 'create', component: UserFormPageComponent },
      { path: 'user-created', component: UserCreatedComponent },
      {
        path: 'manageUsers',
        component: ManageUsersPageComponent,
        children: [
          {
            path: 'delete/:id',
            component: ConfirmDeleteDialogComponent,
            outlet: 'modal',
          },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
