import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule('dashboard', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'content',
    loadComponent: () =>
      loadRemoteModule('list', './List').then((m) => m.ListComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule('list', './Login').then((m) => m.LoginComponent),
  },
];
