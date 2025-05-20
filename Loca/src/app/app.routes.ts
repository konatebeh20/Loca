import { Routes } from '@angular/router';
import { AuthPage } from './auth/auth.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then(m => m.AuthPage)
  },
  
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.page').then(m => m.RegisterPage),
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./auth/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
      }
    ]
  },

  

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
  {
    path: 'reports',
    loadComponent: () => import('./reports/reports.page').then( m => m.ReportsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./auth/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  // {
  //   path: 'auth',
  //   loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  // },






   // Auth routes group
   {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.page').then(m => m.RegisterPage),
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./auth/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
      }
    ]
  },


   {
    path: '**',
    redirectTo: 'auth/login'
  }

];
