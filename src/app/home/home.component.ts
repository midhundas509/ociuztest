import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private dataService: DataService) {}

  buyNowClick() {
    
    const invoiceData = {
      customerName: 'John Doe',
      items: [
        { description: 'Product 1', price: 50 },
        { description: 'Product 2', price: 30 },
        // Add more items as needed
      ],
      total: 80,
    };

    
    // this.dataService.updateInvoiceData(invoiceData);

    
    this.router.navigate(['/invoice']);
  }


  // navigateToInvoiceScreen(): void {
  //   this.router.navigate(['/invoice']);
  // }

}
