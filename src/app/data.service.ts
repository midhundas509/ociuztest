import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private invoiceData = new BehaviorSubject<any>(null);
  currentInvoiceData = this.invoiceData.asObservable();

  updateInvoiceData(data: any) {
    this.invoiceData.next(data);
  }
}
