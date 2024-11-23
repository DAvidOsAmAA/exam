import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:"login",
    loadComponent:()=>import('../core/pages/login/login.component').then(c=>c.LoginComponent)
    },
    {path:"register",
        loadComponent:()=>import('../core/pages/register/register.component').then(c=>c.RegisterComponent)
    }
];
