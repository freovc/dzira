import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
  AuthActionTypes,
  Authenticate,
  AuthenticatingFail,
  AuthenticatingSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authenticate$ = this.actions$.pipe(
    ofType<Authenticate>(AuthActionTypes.Authenticate),
    map(action => action.payload),
    exhaustMap(payload =>
      this.authService.login(payload.name, payload.password).pipe(
        map(user => new AuthenticatingSuccess(user)),
        catchError(err => of(new AuthenticatingFail())),
      ),
    ),
  );
  @Effect({ dispatch: false })
  authSuccessEffect = this.actions$.pipe(
    ofType<AuthenticatingSuccess>(AuthActionTypes.AuthenticatingSuccess),
    tap(() => this.router.navigate(['/'])),
  );
  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType(AuthActionTypes.LogoutUser),
    mergeMap(() => this.authService.logout()),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
