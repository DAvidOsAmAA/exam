import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { loginRes } from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdaptorService implements Adapter {

  constructor() { }
  adapt(data:any):loginRes{
    return {
      message:data.message,
      token:data.token,
      userEmail:data.user.email
    }
  }
}
