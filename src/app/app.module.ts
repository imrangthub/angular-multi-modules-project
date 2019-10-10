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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmployeeHomeComponent,
    EmployeeDetailComponent,
    EmployeeCountComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StudentsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
