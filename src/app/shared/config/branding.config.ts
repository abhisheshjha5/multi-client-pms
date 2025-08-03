export interface BrandingConfig {
  companyName: string;
  logoUrl: string;
  fontColor: string;
  headerColor: string;
  fontFamily: string;
  themeColor: string;
  footerText: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  settingsOptions: {
    allowNewsletter: boolean;
    allowReports: boolean;
    enableCheckinDragDrop: boolean;
    showAnalytics: boolean;
    preferredLanguage: 'en' | 'fr';
  };
}

export const BRANDING_CONFIG: { [client: string]: BrandingConfig } = {
  client1: {
    companyName: 'Filao PMS',
    logoUrl: 'assets/images/client1-logo.jpg',
    fontColor: '#ffffff',
    headerColor: '#1976d2',
    fontFamily: 'Arial, sans-serif',
    themeColor: '#1976d2',
    footerText: 'Serving hospitality with innovation and care.',
    socialLinks: {
      facebook: 'https://facebook.com/filao',
      twitter: 'https://twitter.com/filao',
      instagram: 'https://instagram.com/filao',
    },
    settingsOptions: {
      allowNewsletter: true,
      allowReports: true,
      enableCheckinDragDrop: true,
      showAnalytics: true,
      preferredLanguage: 'en',
    }
  },
  client2: {
    companyName: 'OceanView Rentals',
    logoUrl: 'assets/images/client2-logo.jpg',
    fontColor: '#f8f8f8',
    headerColor: '#c2185b',
    fontFamily: 'Georgia, serif',
    themeColor: '#c2185b',
    footerText: 'Ocean views and unmatched comfort for our guests.',
    socialLinks: {
      facebook: 'https://facebook.com/oceanview',
      instagram: 'https://instagram.com/oceanview',
    },
    settingsOptions: {
      allowNewsletter: false,
      allowReports: true,
      enableCheckinDragDrop: false,
      showAnalytics: false,
      preferredLanguage: 'fr',
    }
  },
  client3: {
    companyName: 'GreenStay Properties',
    logoUrl: 'assets/images/client3-logo.jpg',
    fontColor: '#eeeeee',
    headerColor: '#388e3c',
    fontFamily: '"Courier New", monospace',
    themeColor: '#388e3c',
    footerText: 'Sustainable stays for mindful travelers.',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/greenstay',
      twitter: 'https://twitter.com/greenstay',
    },
    settingsOptions: {
      allowNewsletter: true,
      allowReports: false,
      enableCheckinDragDrop: true,
      showAnalytics: true,
      preferredLanguage: 'en',
    }
  }
};

