import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { User } from '../models/User';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/authenticate', {email, password})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'd');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  signup(user: User) {
    return this.http.post<User>('http://localhost:3000/api/signup', user)
      .do(res => this.setSession(res))
      .shareReplay();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
