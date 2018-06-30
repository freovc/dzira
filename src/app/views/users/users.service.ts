import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConfig } from '../../app.config';
import { UserRole } from './models/user-roles.model';
import { User } from './models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly USERS_ROLE_URL;
  private readonly USERS_URL;

  constructor(private CONST: AppConfig, private http: HttpClient) {
    this.USERS_ROLE_URL = [CONST.apiEndpoint, 'usersRole'].join('/');
    this.USERS_URL = [CONST.apiEndpoint, 'users'].join('/');
  }

  getUsersRole(): Observable<Array<UserRole>> {
    return this.http.get<Array<UserRole>>(this.USERS_ROLE_URL);
  }

  createNewUser(newUser: User): Observable<ResponseCreateNewUser> {
    return this.http.post<ResponseCreateNewUser>(this.USERS_URL, newUser);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USERS_URL);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>([this.USERS_URL, userId].join('/'));
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>([this.USERS_URL, userId].join('/'));
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>([this.USERS_URL, user.id].join('/'), user);
  }
  updateUserPassword({userId, oldPassword, newPassword}): Observable<any> {
    console.log(arguments);
    return this.http.patch<any>(`${this.USERS_URL}/${userId}`, {oldPassword,password: newPassword});
  }
  private serializeUser(user: User) {
    return {
      ...user,
      role: user.role.id,
    };
  }
}

declare type ResponseCreateNewUser = User;
