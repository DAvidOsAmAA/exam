import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgerPassService {
  constructor(private _Httpclient:HttpClient) { }
  private readonly _Router = inject(Router)


  forgotPassword=(email:any):Observable<any>=>{
return this._Httpclient.post('https://exam.elevateegy.com/api/v1/auth/forgotPassword',email)
}

verifyResetCode=(code:any):Observable<any>=>{
  return this._Httpclient.post('https://exam.elevateegy.com/api/v1/auth/verifyResetCode',code)
  }

  resetPassword=(newPass:any):Observable<any>=>{
    return this._Httpclient.put('https://exam.elevateegy.com/api/v1/auth/resetPassword',newPass)
    }

}
