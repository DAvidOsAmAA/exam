import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from "../../../shared/ui/alert-error/alert-error.component";
import { HttpErrorResponse } from '@angular/common/http';
import { AuthApiService } from 'auth-api';
import { Router } from '@angular/router';
import { signupValidator } from '../../../shared/validators/register.validator';
import { ForgerPassService } from '../../../core/services/forger-pass.service';

@Component({
  selector: 'app-forget-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AlertErrorComponent],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.css'
})
export class ForgetPassComponent {
 errorMsg: string = '';
  isLoading: boolean = false;
  steps:number=1;
  constructor(private _authApiService: AuthApiService) {}
  private readonly _Router = inject(Router)
  private _ForgetPass =inject(ForgerPassService)
  forgotPass = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
  });
  
  verifyResetCode = new FormGroup({
    resetCode: new FormControl(null,[Validators.required]),
  });

  resetPassword = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    newPassword: new FormControl(null,[Validators.required]),
  });

  submiteStep1 = () => {


    this.isLoading = true;
    if (this.forgotPass.valid) {
      this._ForgetPass.forgotPassword(this.forgotPass.value).subscribe({
        next: (response) => {
         this.steps=2;
         this.isLoading = false;
        },
        error: (err:HttpErrorResponse) => {
          const errorMessage = err.error.message;
          console.log(errorMessage)
          this.errorMsg = errorMessage;
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  };



  submiteStep2 = () => {


    this.isLoading = true;
    if (this.verifyResetCode.valid) {
      this._ForgetPass.verifyResetCode(this.verifyResetCode.value).subscribe({
        next: (response) => {
         this.steps=3;
         this.isLoading = false;

        },
        error: (err:HttpErrorResponse) => {
          const errorMessage = err.error.message;
          console.log(errorMessage)
          this.errorMsg = errorMessage;
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  };


  submiteStep3 = () => {


    this.isLoading = true;
    if (this.resetPassword.valid) {
      this._ForgetPass.resetPassword(this.resetPassword.value).subscribe({
        next: (response) => {
    console.log(response)
    this.isLoading = false;
        },
        error: (err:HttpErrorResponse) => {
          const errorMessage = err.error.message;
          console.log(errorMessage)
          this.errorMsg = errorMessage;
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  };
}
