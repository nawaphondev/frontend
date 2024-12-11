import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { SidebarMenuComponent } from '../layout/components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from '../layout/components/sidebar/sidebar-submenu/sidebar-submenu.component';

@NgModule({
  imports: [DashboardRoutingModule, AngularSvgIconModule.forRoot(), NftHeaderComponent, SidebarComponent ,SidebarMenuComponent, SidebarSubmenuComponent],
})
export class DashboardModule {}
