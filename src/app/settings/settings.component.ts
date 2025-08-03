import { Component, OnInit } from '@angular/core';
import { BrandingService } from '../shared/services/branding.service';
import { BrandingConfig } from '../shared/config/branding.config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  clients = ['client1', 'client2', 'client3'];
  selectedClient = 'client1';

  branding!: BrandingConfig;
  settingsOptions?: BrandingConfig['settingsOptions'];

  settingList: { label: string; status: string; statusColor: string }[] = [];

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
    this.prepareSettingsDisplay();
  }

  prepareSettingsDisplay(): void {
    if (!this.settingsOptions) return;
    this.settingList = [
      {
        label: 'Newsletter Enabled',
        status: this.settingsOptions.allowNewsletter ? 'Yes' : 'No',
        statusColor: this.settingsOptions.allowNewsletter ? 'success' : 'secondary',
      },
      {
        label: 'Reports Access',
        status: this.settingsOptions.allowReports ? 'Enabled' : 'Disabled',
        statusColor: this.settingsOptions.allowReports ? 'success' : 'secondary',
      },
      {
        label: 'Check-in Drag/Drop',
        status: this.settingsOptions.enableCheckinDragDrop ? 'Available' : 'Unavailable',
        statusColor: this.settingsOptions.enableCheckinDragDrop ? 'info' : 'secondary',
      },
      {
        label: 'Analytics Dashboard',
        status: this.settingsOptions.showAnalytics ? 'Visible' : 'Hidden',
        statusColor: this.settingsOptions.showAnalytics ? 'primary' : 'secondary',
      },
      {
        label: 'Preferred Language',
        status: this.settingsOptions.preferredLanguage?.toUpperCase() || 'EN',
        statusColor: 'dark',
      },
    ];
  }
}
