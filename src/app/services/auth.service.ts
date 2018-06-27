import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConfig } from '../app.config';
import { User } from '../views/users/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTHENTICATION_LOGIN;
  private readonly AUTHENTICATION_REFRESH;
  private readonly AUTHENTICATION_LOGOUT;

  constructor(private http: HttpClient, private CONST: AppConfig) {
    this.AUTHENTICATION_LOGIN = [CONST.apiEndpoint, 'authorize'].join('/');
    this.AUTHENTICATION_LOGOUT = [CONST.apiEndpoint, 'logout'].join('/');
  }

  // FIXME change to post when backend is ready
  // this should be changed to post and proper body object, only for mock in json-server
  login(name: string, password: any): Observable<AuthorizationResponse> {
    return this.http.get<AuthorizationResponse>(
      `${this.AUTHENTICATION_LOGIN}/${password}`,
    );
  }

  // again change this to post on production
  logout() {
    return this.http.get(this.AUTHENTICATION_LOGOUT);
  }
}

export type AuthorizationResponse = User;
