import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { SpinnButtonModule } from '../../shared/spinn-button/spinn-button.module';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { UserCreatedComponent } from './components/user-created/user-created.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserUpdateModalComponent } from './components/user-update-modal/user-update-modal.component';
import { UserWorkComponent } from './components/user-work/user-work.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { ManageUsersPageComponent } from './containers/manage-users-page/manage-users-page.component';
import { UserFormPageComponent } from './containers/user-form-page/user-form-page.component';
import { UserFormPageEffects } from './effects/user-form-page.effects';
import { UserPasswordEffects } from './effects/user-password.effects';
import { UserRolesEffects } from './effects/user-roles.effects';
import { UsersEffects } from './effects/users.effects';
import * as fromUsersState from './reducers';
import { UserUpdatePasswordComponent } from './components/user-update-password/user-update-password.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    SpinnButtonModule,
    StoreModule.forFeature('usersState', fromUsersState.reducers, {
      metaReducers: fromUsersState.metaReducers,
    }),
    EffectsModule.forFeature([
      UsersEffects,
      UserRolesEffects,
      UserFormPageEffects,
      UserPasswordEffects
    ]),
  ],
  declarations: [
    UserWorkComponent,
    UserFormComponent,
    AuthenticateComponent,
    ManageUsersComponent,
    UserCreatedComponent,
    ConfirmDeleteDialogComponent,
    ManageUsersPageComponent,
    UserFormPageComponent,
    UserUpdateModalComponent,
    UserUpdatePasswordComponent,
  ],
})
export class UsersModule {}
