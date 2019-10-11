import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// @Injectable({
//     providedIn: 'root'
//   })

@Injectable()
export class EmployeeService {

    

    constructor(
        private http: HttpClient
      ) { }

      getEmployeesList(): Observable<any> {
          return this.http.get('http://localhost:8090/api/consulation/list').pipe(
              map((data:any)=> data
         ));
      }





    employees = [
        {code:'EMP101', name: 'MD IMRAN HOSSAIN', gender: 'male',age:'28', salary: 30000},
        {code:'EMP102', name: 'MD METHILA HOSSAIN', gender: 'female', age:'22', salary: 20000},
        {code:'EMP103', name: 'MD BIDDUT HOSSAIN', gender: 'male', age:'21', salary: 10000},
        {code:'EMP104', name: 'MD MISTY HOSSAIN', gender: 'female', age:'18', salary: 20000},
        {code:'EMP105', name: 'MD SHOWON HOSSAIN', gender: 'mele', age:'29',salary: 40000},
        {code:'EMP106', name: 'MD MONIR HOSSAIN', gender: 'male', age:'29',salary: 30000}
      ];


      getEmployee(): any{
          return this.employees;
      }
    
}