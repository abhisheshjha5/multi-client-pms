import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any; // 👈 Add this line
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]

})
export class ReservationsComponent {
  reservations = [
    { id: 1, guest: 'John Doe', status: 'Confirmed', checkIn: '2025-08-01', checkOut: '2025-08-05' },
    { id: 2, guest: 'Jane Smith', status: 'Pending', checkIn: '2025-08-02', checkOut: '2025-08-06' },
    { id: 3, guest: 'David Lee', status: 'Cancelled', checkIn: '2025-08-03', checkOut: '2025-08-07' }
  ];

  filtered = [...this.reservations];
  selectedReservation: any = null;
  mode: 'view' | 'edit' = 'view';
  searchTerm: string = '';
  filterStatus: string = 'All';

  search() {
    this.filtered = this.reservations.filter(r =>
      (this.filterStatus === 'All' || r.status === this.filterStatus) &&
      r.guest.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(reservation: any, mode: 'view' | 'edit') {
    this.selectedReservation = reservation;
    this.mode = mode;
    const modal = document.getElementById('reservationModal');
    if (modal) new bootstrap.Modal(modal).show();
  }

  closeModal() {
    this.selectedReservation = null;
  }
  showToast(message: string, type: 'success' | 'danger' = 'success') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-white bg-${type} border-0 show mb-2`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>`;
  toastContainer?.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

}
