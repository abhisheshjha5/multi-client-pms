import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
//import autoTable from 'jspdf-autotable';
import { BrowserModule } from '@angular/platform-browser';
/* import { AppRoutingModule } from '../app-routing.module'; */
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  standalone: true,
  imports: [
    FormsModule, CommonModule   
  ],
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent {
  searchTerm: string = '';
  statusFilter: string = 'All';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedGuest: any = null;
editGuestData: any = null;
  guests = [
    { name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'Checked-in' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', status: 'Checked-out' },
    { name: 'Alice Brown', email: 'alice@example.com', phone: '8765432109', status: 'Checked-in' },
    { name: 'Bob Johnson', email: 'bob@example.com', phone: '7654321098', status: 'Checked-out' },
    { name: 'Sam Roy', email: 'sam@example.com', phone: '4567891230', status: 'Checked-in' },
    { name: 'Lisa Ray', email: 'lisa@example.com', phone: '3216549870', status: 'Checked-in' }
    // Add more if needed
  ];

  get filteredGuests() {
    return this.guests.filter(guest =>
      (this.statusFilter === 'All' || guest.status === this.statusFilter) &&
      (
        guest.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        guest.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  get paginatedGuests() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredGuests.slice(start, start + this.itemsPerPage);
  }

  viewGuest(guest: any) {
    this.selectedGuest = guest;
    const modal: any = document.getElementById('viewGuestModal');
    if (modal) {
      const bsModal = new (window as any).bootstrap.Modal(modal);
      bsModal.show();
    }
  }

editGuest(guest: any) {
  this.openEditModal(guest);
}
openEditModal(guest: any) {
  this.editGuestData = { ...guest }; // clone to avoid direct mutation
  const modal: any = document.getElementById('editGuestModal');
  if (modal) {
    const bsModal = new (window as any).bootstrap.Modal(modal);
    bsModal.show();
  }
}
saveEditedGuest(form: any) {
  if (form.invalid) return;

  const index = this.guests.findIndex(g => g.email === this.editGuestData.email);
  if (index !== -1) {
    this.guests[index] = { ...this.editGuestData };
    this.showToast('Guest details updated successfully!', 'success');
  }

  const modal: any = document.getElementById('editGuestModal');
  if (modal) {
    const bsModal = new (window as any).bootstrap.Modal(modal);
    bsModal.hide();
  }
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

  deleteGuest(guest: any) {
    if (confirm(`Are you sure to delete ${guest.name}?`)) {
      this.guests = this.guests.filter(g => g !== guest);
    }
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredGuests);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Guests');
    XLSX.writeFile(workbook, 'Guests.xlsx');
  }

  exportToPDF() {
    /* const doc = new jsPDF();
    autoTable(doc, {
      head: [['Name', 'Email', 'Phone', 'Status']],
      body: this.filteredGuests.map(guest => [guest.name, guest.email, guest.phone, guest.status])
    });
    doc.save('Guests.pdf'); */
  }

  totalPages(): number {
    return Math.ceil(this.filteredGuests.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  
}
