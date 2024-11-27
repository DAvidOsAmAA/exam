import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthApi {
  constructor(private _HttpClient: HttpClient,private _authApiAdaptorService:AuthApiAdaptorService,private _RegisterApiAdaptorService:RegisterApiAdaptorService) {}


  login(data: loignUser): Observable<loginRes|never[]> {
    return this._HttpClient.post(AuthEndPoint.LOGIN,data).pipe(
      map(res=>this._authApiAdaptorService.adapt(res)),
      catchError(err=>of([]))
    )
  }

   register(data: registerUser): Observable<registerRes|never[]> {
    return this._HttpClient.post(AuthEndPoint.REGISTER,data).pipe(
      map(res=>this._RegisterApiAdaptorService.adapt(res)),
      catchError(err=>of([]))
    )
  }
}
