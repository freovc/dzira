import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as fromRoot from '../../reducers';
import { LogoutUser } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>;
  user$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.isLogged$ = store.select(fromRoot.getIsAuthenticated);
    this.user$ = store.select(fromRoot.getAuthenticatedUser);
  }

  ngOnInit() {}

  logout() {
    this.store.dispatch(new LogoutUser());
  }
}
