import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BRANDING_CONFIG, BrandingConfig } from '../config/branding.config';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
  private clientKey = 'client1'; // default client, can be dynamic
  private brandingSubject = new BehaviorSubject<BrandingConfig>(BRANDING_CONFIG[this.clientKey]);

  // Expose observable for components to subscribe to
  brandingChanged$ = this.brandingSubject.asObservable();

  // Getter to get the current branding synchronously
  get currentBranding(): BrandingConfig {
    return this.brandingSubject.value;
  }

  // Optional method to switch branding dynamically
  setClient(client: string): void {
    if (BRANDING_CONFIG[client]) {
      this.clientKey = client;
      this.brandingSubject.next(BRANDING_CONFIG[client]);
    }
  }
}
