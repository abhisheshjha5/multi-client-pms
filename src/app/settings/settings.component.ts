import { Component, OnInit } from '@angular/core';
import { BrandingService } from '../shared/services/branding.service';
import { BrandingConfig } from '../shared/config/branding.config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  clients = ['client1', 'client2', 'client3'];
  selectedClient = 'client1';

  branding!: BrandingConfig;
  settingsOptions?: BrandingConfig['settingsOptions'];

  constructor(private brandingService: BrandingService) {}

  ngOnInit(): void {
    this.setClientSettings(this.selectedClient);
  }

  onClientChange(client: string): void {
    this.selectedClient = client;
    this.setClientSettings(client);
  }

  setClientSettings(client: string): void {
    this.brandingService.setClient(client);
    this.branding = this.brandingService.currentBranding;
    this.settingsOptions = this.branding.settingsOptions;
  }
}
