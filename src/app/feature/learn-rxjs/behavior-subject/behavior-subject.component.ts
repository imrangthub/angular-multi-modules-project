import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  simpleOutPut: string;

  mySubject  = new BehaviorSubject<any>(0);

  seriesData$ = this.mySubject.asObservable();



  ngOnInit() {

    this.seriesData$.subscribe( data => {
      this.simpleOutPut = data;
      console.log("Early Subscription val:",data);
    });

    this.mySubject.next(1);
    this.mySubject.next(2);
    this.mySubject.next(3);


    setTimeout(() => {
      this.seriesData$.subscribe(data => {
      console.log("Lster Subscription val:",data);
      });
      this.mySubject.next(4);

    }, 3000);

  }


}
