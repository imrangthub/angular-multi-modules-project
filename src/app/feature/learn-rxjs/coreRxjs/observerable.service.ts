import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ObserverableService {

  private listEmployees: any[] = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'John' },
  ];


  constructor() { }


  getSingleValueSerice(): Observable<any> {
    return of(1,2,3);
  }



getEmployees(): Observable<any[]> {
    return of(this.listEmployees);
}


getEmployeesWithDelay(): Observable<any[]> {
  return of(this.listEmployees).pipe(
    delay(2000)
  );
}



  

}
