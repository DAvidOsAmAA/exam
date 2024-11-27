import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { registerRes } from '../interfaces/registerRes';

@Injectable({
  providedIn: 'root',
})
export class RegisterApiAdaptorService implements Adapter {
  constructor() {}

  adapt(data: any):registerRes {
    return {
      message:data.message,
      username: data.user.username,
      email: data.user.email,
    };
  }
}
