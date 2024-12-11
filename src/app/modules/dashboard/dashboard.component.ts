import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { SidebarMenuComponent } from '../layout/components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from '../layout/components/sidebar/sidebar-submenu/sidebar-submenu.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [RouterOutlet, SidebarComponent, NftHeaderComponent, SidebarMenuComponent,SidebarMenuComponent,SidebarSubmenuComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
