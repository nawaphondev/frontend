import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [AuthRoutingModule, AngularSvgIconModule.forRoot(),SweetAlert2Module.forRoot()],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AuthModule {}
