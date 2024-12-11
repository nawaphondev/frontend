import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';
import { NftService } from '../../../../core/services/nft.service';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  standalone: true,
  imports: [
    NftHeaderComponent,
    NftDualCardComponent,
    NftSingleCardComponent,
    NftChartCardComponent,
    NftAuctionsTableComponent,
    AngularSvgIconModule,
  ],
  providers: [SvgIconRegistryService],
})
export class NftComponent implements OnInit {
  nft: Array<Nft> = [];

  constructor(
    private nftService: NftService,
    private svgIconRegistry: SvgIconRegistryService
  ) {}

  ngOnInit(): void {
    // Load NFT list
    this.nft = this.nftService.getNftList();

    // Register SVG icons
    this.svgIconRegistry.loadSvg('assets/icons/nft-icon.svg', 'nft-icon');
    this.svgIconRegistry.loadSvg('assets/icons/chart-icon.svg', 'chart-icon');
  }
}
