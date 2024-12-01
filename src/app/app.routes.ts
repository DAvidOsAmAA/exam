import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
   loadComponent:()=>import('../core/pages/auth/auth.component').then(c=>c.AuthComponent),
    children: [
        {
            path:"",
            redirectTo:"login",
            pathMatch:"full"
        },

      {
        path: 'login',
        loadComponent: () =>
          import('../core/pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../core/pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
    ],
  },
];
