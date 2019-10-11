import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_coreEmployee/service/employee.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  employees: any[];
  empFelterValue: string = 'all';

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
   // this.getAllEmployee();
   this.getAllEmployeeLIst();
  }


  getAllEmployeeLIst(): void {
    this.employeeService.getEmployeesList().subscribe(
      res => {
        if (res.success) {
          console.log(res.items);
          this.employees = res.items;
        }
      },
      err => {
        this.employees = [];
        console.log("getAllEmployeeLIst error: ", err);
      });
  }


  // getAllEmployee(): void {
  //   this.employees = this.employeeService.getEmployee()
  // }


  onEmpFilterRadioBtnChange(eventVel: string): void {
    console.log(eventVel);
    this.empFelterValue = eventVel;
  }


  getTotalEmployeeCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeeCount(): number {
    return this.employees.filter(obj => obj.gender === 'MALE').length;
  }

  getTotalFemaleEmpCount(): number {
    return this.employees.filter(obj => obj.gender === 'FEMALE').length;
  }



}
