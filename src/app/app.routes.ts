import { Routes } from '@angular/router';
import { isLoggedInGuard } from '../core/guards/isloaggedin.guard';

export const routes: Routes = [
  {
   path: '',
   canActivate:[isLoggedInGuard],
   loadComponent:()=>import('./components/auth/auth.component').then(c=>c.AuthComponent),
    children: [
        {path:"",redirectTo:"login",pathMatch:"full"},
        {path: 'login',loadComponent: () =>import('./components/login/login.component').then((c) => c.LoginComponent),},
        {path: 'register',loadComponent: () =>import('./components/register/register.component').then((c) => c.RegisterComponent),},
        {path: 'forget-password',loadComponent: () =>import('./components/forget-pass/forget-pass.component').then((c) => c.ForgetPassComponent)}
    ],
  },
];
