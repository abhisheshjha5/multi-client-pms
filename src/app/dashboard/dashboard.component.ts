
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { 
  metrics = [
    {
      title: 'Total Reservations',
      value: 128,
      icon: 'fa-calendar-check',
      color: 'bg-primary'
    },
    {
      title: 'Active Guests',
      value: 46,
      icon: 'fa-users',
      color: 'bg-success'
    },
    {
      title: 'Available Rooms',
      value: 12,
      icon: 'fa-door-open',
      color: 'bg-warning'
    }
  ];
}
