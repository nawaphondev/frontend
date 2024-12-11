import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { SidebarMenuComponent } from '../layout/components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from '../layout/components/sidebar/sidebar-submenu/sidebar-submenu.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' }, // เส้นทางเริ่มต้น
      { path: 'nfts', component: NftComponent }, // เส้นทางไปหน้า NFT
      { path: '**', redirectTo: '/errors/404' }, // เส้นทาง fallback ไปหน้า 404
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AngularSvgIconModule.forRoot(),NftHeaderComponent,SidebarComponent,SidebarMenuComponent,SidebarSubmenuComponent,NftComponent],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
