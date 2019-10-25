import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from './feature/courses/courses.module';
import { StudentsModule } from './feature/students/students.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { EmployeeHomeComponent } from './feature/employee/employee-home/employee-home.component';
import { EmployeeDetailComponent } from './feature/employee/employee-home/employee-detail/employee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCountComponent } from './feature/employee/employee-home/employee-count/employee-count.component';
import { EmployeeService } from './feature/employee/_coreEmployee/service/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LearnRxjsComponent } from './feature/learn-rxjs/learn-rxjs.component';
import { LearnObservableComponent } from './feature/learn-rxjs/learn-observable/learn-observable.component';
import { SubjectComponent } from './feature/learn-rxjs/subject/subject.component';
import { BehaviorSubjectComponent } from './feature/learn-rxjs/behavior-subject/behavior-subject.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmployeeHomeComponent,
    EmployeeDetailComponent,
    EmployeeCountComponent,
    LearnRxjsComponent,
    LearnObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
  ],
  imports: [
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StudentsModule,
    HeaderModule,
    FooterModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
