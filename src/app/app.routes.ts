import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
   loadComponent:()=>import('./components/auth/auth.component').then(c=>c.AuthComponent),
    children: [
        {
            path:"",
            redirectTo:"login",
            pathMatch:"full"
        },

      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
    ],
  },
];
