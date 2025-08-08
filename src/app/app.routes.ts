import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cafirm } from './pages/cafirm/cafirm';
import { Requested } from './pages/requested/requested';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'cafirm', component: Cafirm },
      { path: 'requested', component: Requested },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
