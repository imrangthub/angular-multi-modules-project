import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ObserverableService } from '../coreRxjs/observerable.service';

@Component({
  selector: 'app-learn-observable',
  templateUrl: './learn-observable.component.html',
  styleUrls: ['./learn-observable.component.css']
})
export class LearnObservableComponent implements OnInit {


  // Reference firstNameInput variable inside Component
   @ViewChild('fstInput') fstInput: ElementRef;
   simpleOutPut: string = "Default value"

  constructor(
    private observerableService: ObserverableService
  ) { }

  ngOnInit() {

    // Create simple observable that emits three values
   const myObservable = of(1, 2, 3);

    // Create observer object
    const myObserver = {

      next: function(val){
        console.log('Observer got a next value: ' + val)
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    myObservable.subscribe(myObserver);


  }


  getSingleValueSerice(): void {
    this.observerableService.getSingleValueSerice().subscribe((val) => {
      console.log("Serice Value : ",val);
    });
  }


  startPassingData(): void {
    this.observerableService.getEmployeesWithDelay().subscribe((empList) => {
      console.log("empList: ",empList);
    });
  }


  



}
