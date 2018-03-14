import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import 'rxjs/add/operator/do';

import { User } from '../models/User';

@Injectable()
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post<User>('api/login', {email, password})
      .do(res => this.setSession)
      .shareReplay();
  }

  private setSession() {

  }
}
