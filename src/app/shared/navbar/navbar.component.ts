import { Component, OnInit } from '@angular/core';
import { BrandingService } from '../services/branding.service';
import { BrandingConfig } from '../config/branding.config';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  branding: any;
  fontColor = '#ffffff'; // default white

  constructor(private brandingService: BrandingService) {}

  ngOnInit(): void {
    this.brandingService.brandingChanged$.subscribe((config: BrandingConfig) => {

      this.branding = config;
      this.fontColor = config?.fontColor || '#ffffff';

      // Apply theme colors and fonts to root variables
      document.documentElement.style.setProperty('--header-color', config?.headerColor || '#000000');
      document.documentElement.style.setProperty('--font-family', config?.fontFamily || 'sans-serif');
    });
  }
}
