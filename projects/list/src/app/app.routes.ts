import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'content',
    component: ListComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];
