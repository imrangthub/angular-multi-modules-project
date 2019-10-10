import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  employees: any[];

  constructor() { }

  ngOnInit() {

    this.employees = [
      {code:'EMP101', name: 'MD IMRAN HOSSAIN', gender: 'MALE',age:'28', salary: 30000},
      {code:'EMP102', name: 'MD METHILA HOSSAIN', gender: 'FEMALE', age:'22', salary: 20000},
      {code:'EMP103', name: 'MD BIDDUT HOSSAIN', gender: 'MALE', age:'21', salary: 10000},
      {code:'EMP104', name: 'MD MISTY HOSSAIN', gender: 'FEMALE', age:'18', salary: 20000},
      {code:'EMP105', name: 'MD SHOWON HOSSAIN', gender: 'MALE', age:'29',salary: 40000},
      {code:'EMP106', name: 'MD MONIR HOSSAIN', gender: 'MALE', age:'29',salary: 30000}
    ];

  }


gitEmployee(): void {
  this.employees;
}

getTotalEmployeeCount():number {
  return this.employees.length;
}

getTotalMaleEmployeeCount(): number {
  return this.employees.filter(obj => obj.gender === 'MALE').length;
}

getTotalFemaleEmpCount(): number {
  return this.employees.filter(obj => obj.gender === 'FEMALE').length;
}



}
