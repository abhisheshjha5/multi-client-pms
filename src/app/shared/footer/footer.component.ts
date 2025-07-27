import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandingService } from '../services/branding.service';
import { BrandingConfig } from '../config/branding.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() hotelName: string = 'Filao PMS';
  newsletterForm: FormGroup;
  today: Date = new Date();

  themeColor: string = '#2c3e50';
  fontFamily: string = 'sans-serif';
  logoUrl: string = '';
  footerText: string = '';
  socialLinks: { facebook?: string; instagram?: string; linkedin?: string } = {};

  constructor(
    private fb: FormBuilder,
    private brandingService: BrandingService
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.applyBranding();

    this.brandingService.brandingChanged$?.subscribe((branding) => {
      this.themeColor = branding.themeColor;
      this.fontFamily = branding.fontFamily;
      this.logoUrl = branding.logoUrl;
      this.footerText = branding.footerText;
      this.socialLinks = branding.socialLinks || {};
    });
  }

  applyBranding() {
    const branding = this.brandingService.currentBranding;
    this.themeColor = branding.themeColor;
    this.fontFamily = branding.fontFamily;
    this.logoUrl = branding.logoUrl;
    this.footerText = branding.footerText;
    this.socialLinks = branding.socialLinks || {};
  }

  subscribe() {
    if (this.newsletterForm.valid) {
      alert(`Subscribed: ${this.newsletterForm.value.email}`);
      this.newsletterForm.reset();
    }
  }
}

