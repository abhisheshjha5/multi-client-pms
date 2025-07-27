import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-housekeeping',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent {
  rooms = [
    { roomNumber: '101', status: 'Pending', assignedTo: '', notes: '' },
    { roomNumber: '102', status: 'Cleaned', assignedTo: 'John', notes: 'Towels replaced' },
    { roomNumber: '103', status: 'Pending', assignedTo: '', notes: '' }
  ];
  selectedRoom: any = null;
  showPendingOnly = false;
  showToast = false;
  toastMsg = '';

  staffList = ['John', 'Jane', 'Carlos', 'Priya', 'Ahmed']; // Default staff


  openAssignModal(room: any) {
    this.selectedRoom = { ...room };
    const modal = document.getElementById('assignModal');
    if (modal) new (window as any).bootstrap.Modal(modal).show();
  }

  saveAssignment() {
    const index = this.rooms.findIndex(r => r.roomNumber === this.selectedRoom.roomNumber);
    this.rooms[index] = { ...this.selectedRoom };
    this.toastMsg = `Staff assigned to room ${this.selectedRoom.roomNumber}`;
    this.showSuccessToast();
    const modal = document.getElementById('assignModal');
    if (modal) (window as any).bootstrap.Modal.getInstance(modal)?.hide();
  }

  showSuccessToast() {
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}
