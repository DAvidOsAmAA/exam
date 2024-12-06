import { Component } from '@angular/core';
import {FormControl,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { confirmPassword } from '../../../shared/utilities/confirm-password';
import { signupValidator } from '../../../shared/validators/register.validator';
import { registerUser } from '../../../../projects/auth-api/src/lib/interfaces/register';
import { AuthApiService } from 'auth-api';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, AlertErrorComponent,NgClass],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  constructor(private _authApiService:AuthApiService){
    
  }



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
    
    console.log('Sending registration data:', this.register.value);
    if (this.register.valid) {
      this._authApiService.register(formData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
        },
        error: (err) => {
          console.error('Registration failed:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  };
  
}