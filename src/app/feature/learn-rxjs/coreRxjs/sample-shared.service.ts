import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleSharedService {

  private invoiceNumberSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  invoiceNo$ =  this.invoiceNumberSource.asObservable();


  constructor() { }



  setInvoiceNo(invoiceNo: number) {
    this.invoiceNumberSource.next(invoiceNo);
  }

  




}
