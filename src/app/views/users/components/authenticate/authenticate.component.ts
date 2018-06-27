import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { flip } from 'ngx-animate/lib';
import { Observable } from 'rxjs/internal/Observable';
import * as fromRoot from '../../../../reducers';
import { Authenticate } from '../../../../store/auth/auth.actions';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  animations: [trigger('flip', [transition(':enter', useAnimation(flip))])],
})
export class AuthenticateComponent implements OnInit {
  name: string;
  password: string;
  loading$: Observable<boolean>;
  authFail$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.loading$ = store.select(fromRoot.getIsLoadint);
    this.authFail$ = store.select(fromRoot.getIsFail);
  }

  ngOnInit() {}

  login(form: FormGroup) {
    this.store.dispatch(
      new Authenticate({ name: this.name, password: this.password }),
    );
  }
}
