import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }
  }
}
const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('../../modules/layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard],
  },
];
