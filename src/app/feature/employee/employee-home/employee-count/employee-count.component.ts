import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {


  @Input() all: number;

  @Input() male: number;

  @Input() female: number;

  @Input() myTesInput: number;


  employeeCountValue: string = 'All';

  constructor() { }

  ngOnInit() {
      console.log("myTesInput",this.myTesInput);
  }


  onChangeRadioBtn(): void {
    console.log(this.employeeCountValue);
  }

}
