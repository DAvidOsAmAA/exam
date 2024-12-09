import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthAPI.endpoint';
import { AuthApiAdaptorService } from './adapter/auth-api.adaptor';
import { RegisterApiAdaptorService } from './adapter/Register-api-adaptor';
import { loginRes } from './interfaces/loginRes';
import { loignUser } from './interfaces/login';
import { registerUser } from './interfaces/register';
import { registerRes } from './interfaces/registerRes';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthApi {
  constructor(
    private _HttpClient: HttpClient,
    private _authApiAdaptorService: AuthApiAdaptorService,
    private _RegisterApiAdaptorService: RegisterApiAdaptorService
  ) {}

  login(data: loignUser): Observable<loginRes> {
    return this._HttpClient
      .post(AuthEndPoint.LOGIN, data)
      .pipe(map((res) => this._authApiAdaptorService.adapt(res)));
  }

  register(data: registerUser): Observable<registerRes> {
    return this._HttpClient
      .post(AuthEndPoint.REGISTER, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((res) => this._RegisterApiAdaptorService.adapt(res)));
  }

  saveUserDate = () => {
    const _Router = inject(Router)

    let token = localStorage.getItem('token');
    if (token) {
      try {
        let decoded = jwtDecode(token);
      } catch (err) {
      _Router.navigate(['login'])
        localStorage.clear();
      }
    }
  };
}
