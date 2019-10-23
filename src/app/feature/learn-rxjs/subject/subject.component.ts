import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { SubjectService } from '../coreRxjs/subject.service';
import { DesignService } from 'src/app/core/design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {


  constructor(
    private subjectService : SubjectService,
    private designService : DesignService
  ) { }

  simpleOutPut: string;
  colorName:string;

  mySubject = new Subject<any>();

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

    this.subjectService.mySampleSubject.subscribe( val => {
      this.simpleOutPut = val;
      console.log("Service Subject Data:", val);
    });

  }


  setColor(): void {
    if(this.colorName){
      this.designService.footerColor = this.colorName;
    }
    console.log("Color name: ",this.colorName);
  }


  startPassingData(): void{
    this.subjectService.startPassingData();
  }


  startPassingDataWithInterval(): void{
    this.subjectService.startPassingDataWithInterval();
  }


}
