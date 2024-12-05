import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { confirmPassword } from '../../../shared/utilities/confirm-password';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, AlertErrorComponent],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register = new FormGroup(
    {
      username: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20),]),
      firstName: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20),]),
      lastName: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20),]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),]),
      rePassword: new FormControl(null),
      phone: new FormControl(null, [Validators.required]),
    },
    confirmPassword
  );


  


  SendData = () => {
    if (this.register.valid) {
      console.log(this.register.value);
    }
  };
}