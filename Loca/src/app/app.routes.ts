import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
    {
    path: 'dashboard',
    loadComponent: () => import('./app/Dashboard/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  // {
  //   path: 'accueil',
  //   loadComponent: () => import('./app/Dashboard/accueil/accueil.page').then( m => m.AccueilPage)
  // },
  {
    path: 'analyse-spatial',
    loadComponent: () => import('./app/Dashboard/analyse-spatial/analyse-spatial.page').then( m => m.AnalyseSpatialPage)
  },
  {
    path: 'meteo-incidents',
    loadComponent: () => import('./app/Dashboard/meteo-incidents/meteo-incidents.page').then( m => m.MeteoIncidentsPage)
  },
  {
    path: 'cartographie',
    loadComponent: () => import('./app/Dashboard/cartographie/cartographie.page').then( m => m.CartographiePage)
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
