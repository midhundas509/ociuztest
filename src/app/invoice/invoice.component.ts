import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  invoiceData: any = {
    customerName: 'John Doe',
    items: [
      { name: 'non-veg Breakfast', price: 150 },
      { name: 'Item 2', price: 20 },
      // Add more items as needed
    ],
    total: 30
  };


  generatePDF(): void {
    const pdf = new jsPDF();
    pdf.text('Coffee Studio', 20, 10);
    pdf.text('Invoice Information', 20, 20);
    pdf.text('Date: 2023-11-20', 20, 30);
    pdf.text('Invoice Number: ABC123', 20, 40);
  
    pdf.save('invoice.pdf');
  }

}
