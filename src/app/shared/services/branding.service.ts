import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BRANDING_CONFIG, BrandingConfig } from '../config/branding.config';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
  private clientKey: string;
  private brandingSubject: BehaviorSubject<BrandingConfig>;
  brandingChanged$; // will assign in constructor

  constructor() {
    // Extract the client name from the URL
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    // For GitHub Pages with repo name in path: PMS-demo/clientX
    const possibleClient = pathSegments.length > 1 ? pathSegments[1] : 'client1';

    // Fallback to client1 if not found
    this.clientKey = BRANDING_CONFIG[possibleClient] ? possibleClient : 'client1';

    // Initialize BehaviorSubject
    this.brandingSubject = new BehaviorSubject<BrandingConfig>(
      BRANDING_CONFIG[this.clientKey]
    );

    // Assign observable AFTER subject exists
    this.brandingChanged$ = this.brandingSubject.asObservable();
  }

  // Getter for current branding synchronously
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
