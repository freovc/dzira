import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CreateUser } from '../../actions/user-form-page.actions';
import { LoadUserRoles } from '../../actions/user-roles.actions';
import { UserRole } from '../../models/user-roles.model';
import { User } from '../../models/User.model';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css'],
})
export class UserFormPageComponent implements OnInit {
  userRoles$: Observable<UserRole[]>;
  creatingUser$: Observable<boolean>;
  creatingUserSuccess$: Observable<boolean>;
  creatingUserFail$: Observable<boolean>;
  creatingUserErrorMsg$: Observable<string>;

  constructor(private store: Store<any>) {
    this.creatingUser$ = store.select(fromUsers.getIsCreatingUser);
    this.creatingUserSuccess$ = store.select(fromUsers.getIsCreatingUserSucces);
    this.creatingUserFail$ = store.select(fromUsers.getIsCreatingUserFail);
    this.creatingUserErrorMsg$ = store.select(fromUsers.getErrorMsg);
    this.userRoles$ = store.select(fromUsers.getUserRoles);
  }

  createUser(user: User) {
    this.store.dispatch(new CreateUser(user));
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserRoles());
  }
}
