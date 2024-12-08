import { Component, inject } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { confirmPassword } from '../../../shared/utilities/confirm-password';
import { signupValidator } from '../../../shared/validators/register.validator';
import { registerUser } from '../../../../projects/auth-api/src/lib/interfaces/register';
import { AuthApiService } from 'auth-api';
import { NgClass } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, AlertErrorComponent, NgClass],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  errorMsg: string = '';
  isLoading: boolean = false;
  constructor(private _authApiService: AuthApiService) {}
  private readonly _Router = inject(Router)

  register = new FormGroup(
    {
      username: new FormControl(null, signupValidator.username),
      firstName: new FormControl(null, signupValidator.firstName),
      lastName: new FormControl(null, signupValidator.lastName),
      email: new FormControl(null, signupValidator.email),
      password: new FormControl(null, signupValidator.password),
      rePassword: new FormControl(null),
      phone: new FormControl(null, signupValidator.phone),
    },
    confirmPassword
  );

  // ========> another way
  //private readonly _FormBuilder=inject(FormBuilder)
  // register = this._FormBuilder.group({
  //   username:[null,[signupValidator.username]],
  //   firstName:[null,[signupValidator.firstName]],
  //   lastName:[null,[signupValidator.lastName]],
  //   email:[null,[signupValidator.email]],
  //   password:[null,[signupValidator.password]],
  //   rePassword:[null],
  //   phone:[null,[signupValidator.phone]]
  // },{validators:[confirmPassword]})

  SendData = () => {
    const formData: registerUser = {
      username: this.register.value.username || undefined,
      firstName: this.register.value.firstName || undefined,
      lastName: this.register.value.lastName || undefined,
      email: this.register.value.email || undefined,
      password: this.register.value.password || undefined,
      rePassword: this.register.value.rePassword || undefined,
      phone: this.register.value.phone || undefined,
    };

    this.isLoading = true;
    if (this.register.valid) {
      this._authApiService.register(formData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
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
