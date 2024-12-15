import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertErrorComponent } from "../../../shared/ui/alert-error/alert-error.component";
import { HttpErrorResponse } from '@angular/common/http';
import { signupValidator } from '../../../shared/validators/register.validator';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { NgClass } from '@angular/common';
import { loignUser } from '../../../../dist/auth-api/lib/interfaces/login';
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, AlertErrorComponent, NgClass,RouterLink
],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMsg: string = '';
  isLoading: boolean = false;
  constructor(private _authApiService: AuthApiService) {}
  private readonly _Router = inject(Router)

  login = new FormGroup({
    email: new FormControl(null, signupValidator.email),
    password: new FormControl(null, signupValidator.password),
  });
  

  SendData = () => {
    const formData: loignUser = {
      email: this.login.value.email||undefined ,
      password: this.login.value.password||undefined,
    };

    this.isLoading = true;
    if (this.login.valid) {
      this._authApiService.login(formData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          localStorage.setItem('token',response.token);
          this._authApiService.saveUserDate()
          this._Router.navigate(['auth/login']);
          if(response.message='success'){
            this.isLoading = false;
          }
        },
        error: (err:HttpErrorResponse) => {
          const errorMessage = err.error.message;
          console.log(errorMessage)
          this.errorMsg = errorMessage;
          console.error('Registration failed:', err);
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  };
}
