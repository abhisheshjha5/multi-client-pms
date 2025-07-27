
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GuestsComponent } from './guests/guests.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
// import { CheckinCheckoutComponent } from './checkin-checkout/checkin-checkout.component';
import { SettingsComponent } from './settings/settings.component';
import { CheckincheckoutComponent } from './checkin-checkout/checkin-checkout.component';
import { NgModule } from '@angular/core';
//import { BrandingDemoComponent } from './branding-demo/branding-demo.component';

 const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'guests', component: GuestsComponent },
  { path: 'housekeeping', component: HousekeepingComponent },
  { path: 'checkin', component: CheckincheckoutComponent },
  { path: 'settings', component: SettingsComponent },
   //{ path: 'branding-demo', component: BrandingDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }