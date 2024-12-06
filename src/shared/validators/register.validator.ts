import { Validators } from "@angular/forms";

export const signupValidator = {
    username:[Validators.required,Validators.minLength(2),Validators.maxLength(20),],
    firstName:[Validators.required,Validators.minLength(2),Validators.maxLength(20),],
    lastName: [Validators.required,Validators.minLength(2),Validators.maxLength(20),],
    email: [Validators.required, Validators.email],
    password:[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),],
    phone:[Validators.required],
}