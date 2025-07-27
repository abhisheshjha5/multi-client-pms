import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkincheckout',
  templateUrl: './checkin-checkout.component.html',
  styleUrls: ['./checkin-checkout.component.css'],
  standalone: true,
  imports: [
     FormsModule, CommonModule   
   ],
})
export class CheckincheckoutComponent {
  today = new Date().toISOString().split('T')[0];

  checkIns = [
    { name: 'Alice', room: '101', time: '11:00 AM' },
    { name: 'Bob', room: '102', time: '12:30 PM' }
  ];

  checkOuts = [
    { name: 'Charlie', room: '201', time: '10:00 AM' },
    { name: 'Diana', room: '202', time: '9:45 AM' }
  ];

  onAction(type: 'checkin' | 'checkout', guest: any) {
    alert(`${guest.name} ${type === 'checkin' ? 'checked in' : 'checked out'} successfully!`);
  }
}
