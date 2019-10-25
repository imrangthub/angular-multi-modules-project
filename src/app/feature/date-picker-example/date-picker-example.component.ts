import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-example',
  templateUrl: './date-picker-example.component.html',
  styleUrls: ['./date-picker-example.component.css']
})
export class DatePickerExampleComponent implements OnInit {

   // Filter fields
   fromDate: Date;
   toDate  : Date;

   // max & min date for from date to date
   minDate: Date;
   maxDate: Date;
   private DATE_FMT = 'dd/MM/yyyy';
 

  constructor() { }

  ngOnInit() {
    
    this.toDate = new Date()
    this.fromDate = new Date();
    this.maxDate = new Date();
    this.fromDate.setDate(this.toDate.getDate() - 7);

  }

  onChangeFromDate(): void{
    // console.log("On change selected from date ",this.fromDate);
    if(this.fromDate){
      console.log("onChangeFromDate: ",this.fromDate);
    }
    
  }

  // on change to date
  onChangeToDate(): void{
    if(this.toDate){
      console.log("onChangeToDate:",this.toDate);
    }
  }


}
