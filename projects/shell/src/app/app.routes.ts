import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule('dashboard', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'list',
    loadComponent: () =>
      loadRemoteModule('list', './Component').then((m) => m.AppComponent),
  },
];
