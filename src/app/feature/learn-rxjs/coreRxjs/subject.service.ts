import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  mySampleSubject = new Subject<any>();

  serviceDataProcessing$ = this.mySampleSubject.asObservable();

  constructor() { }



  startPassingData(): void{
    this.mySampleSubject.next(1);
  }

  myVal: number = 1;


  startPassingDataWithInterval(): void{
    this.myVal++;
  setTimeout(() => {
    this.mySampleSubject.next(this.myVal);
    this.startPassingDataWithInterval();
   }, 1500);

  }

  

}
