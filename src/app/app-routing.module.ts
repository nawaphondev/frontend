import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EditProfileUsersComponent } from './modules/components/edit-profile-users/edit-profile-users.component';
import { EditProfileCompanyComponent } from './modules/components/edit-profile-company/edit-profile-company.component';
import { ProductionLineManangementComponent } from './modules/components/production-line-manangement/production-line-manangement.component';
import { MachineManangementComponent } from './modules/components/machine-manangement/machine-manangement.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'uikit',
    loadChildren: () => import('./modules/uikit/uikit.module').then((m) => m.UikitModule),
  },
  { path: 'edit-profile-users', component: EditProfileUsersComponent },
  { path: 'edit-profile-company', component: EditProfileCompanyComponent },
  { path: 'production-line-manangement', component: ProductionLineManangementComponent },
  { path: 'machine-manangement', component: MachineManangementComponent },
  {
    path: '**',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularSvgIconModule.forRoot(),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
