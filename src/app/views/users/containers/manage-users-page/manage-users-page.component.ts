import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {
  SetNewPassword, SetOldPassword
} from '../../actions/user-password.actions';
import { LoadUserRoles } from '../../actions/user-roles.actions';
import {
  ClearLoadingState,
  DeleteUser,
  HideUserDeleteDialog,
  LoadUsers,
  SelectUser,
  ShowUserDeleteDialog,
  ShowUserEditModalDialog,
  SynchronizeFormWithStore, UpdateUserPassword,
  UpdateUser,
} from '../../actions/users-manage-page.actions';
import { UserRole } from '../../models/user-roles.model';
import { User } from '../../models/User.model';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-manage-users-page',
  templateUrl: './manage-users-page.component.html',
  styleUrls: ['./manage-users-page.component.css'],
})
export class ManageUsersPageComponent implements OnInit {
  users$: Observable<User[]>;
  deletingUser$: Observable<boolean>;
  deleteUserComplete$: Observable<boolean>;
  usersLoading$: Observable<boolean>;
  loading$: Observable<boolean>;
  loadingSuccess$: Observable<boolean>;
  loadingFail$: Observable<boolean>;
  deleteUserModalVisible$: Observable<boolean>;
  userEditModalDialogVisible$: Observable<boolean>;
  selectedUser$: Observable<any>;
  userRoles$: Observable<UserRole[]>;
  updatingPassword$: Observable<boolean>;
  updatingPasswordSuccess$: Observable<boolean>;
  updatingPasswordFail$: Observable<boolean>;


  constructor(
    private store: Store<fromUsers.State>,
    private activeRouter: ActivatedRoute,
  ) {
    this.users$ = store.select(fromUsers.getUsers);
    this.usersLoading$ = store.select(fromUsers.getIsLoading);
    this.deleteUserModalVisible$ = store.select(
      fromUsers.getIsDeleteUserModalVisible,
    );
    this.userEditModalDialogVisible$ = store.select(
      fromUsers.getIsEditUserModalVisible,
    );
    this.deletingUser$ = store.select(fromUsers.getIsdeletingUser);
    this.selectedUser$ = store.select(fromUsers.getSelectedUser);
    this.loading$ = store.select(fromUsers.getIsLoading);
    this.loadingSuccess$ = store.select(fromUsers.getIsLoadingSuccess);
    this.loadingFail$ = store.select(fromUsers.getIsLoadingFail);
    this.userRoles$ = store.select(fromUsers.getUserRoles);
    this.deleteUserComplete$ = store.select(fromUsers.getIsDeletingUserSuccess);
    this.updatingPassword$ = store.select(fromUsers.getIsuUpdatingPassword);
    this.updatingPasswordSuccess$ = store.select(fromUsers.getIsuUpdatingPasswordSuccess);
    this.updatingPasswordFail$ = store.select(fromUsers.getIsuUpdatingPasswordFail);
  }

  ngOnInit() {
    if (!this.activeRouter.snapshot.paramMap.has('fromCreateUser')) {
      this.store.dispatch(new LoadUsers());
      this.store.dispatch(new LoadUserRoles());
    }
  }

  showDeleteUserModal(user: User) {
    this.store.dispatch(new ClearLoadingState());
    this.store.dispatch(new SelectUser(user));
    this.store.dispatch(new ShowUserDeleteDialog());
  }

  hideDeleteUserModal() {
    this.store.dispatch(new ClearLoadingState());
    this.store.dispatch(new SelectUser(null));
    this.store.dispatch(new HideUserDeleteDialog());
  }

  showUserEditModalDialog(user: User) {
    this.store.dispatch(new ClearLoadingState());
    this.store.dispatch(new SelectUser(user));
    this.store.dispatch(new ShowUserEditModalDialog());
  }

  clearLoadingState() {
    this.store.dispatch(new ClearLoadingState());
  }

  selectUser(user) {
    this.store.dispatch(new SelectUser(user));
  }

  deleteUser() {
    this.store.dispatch(new DeleteUser());
  }
  updatePassword () {
    console.error('update password');
    this.store.dispatch(new UpdateUserPassword());
  }
  setNewPassword(newPassword) {
    this.store.dispatch(new SetNewPassword({newPassword}))
  }
  setOldPassword(oldPassword) {
    console.log('getting old password', oldPassword);
    this.store.dispatch(new SetOldPassword({oldPassword}))
  }

  synchronizeFormWithStore(user) {
    this.store.dispatch(new SynchronizeFormWithStore(user));
  }

  updateUser() {
    this.store.dispatch(new UpdateUser());
  }
}
