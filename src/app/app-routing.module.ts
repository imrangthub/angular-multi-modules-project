import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './feature/courses/course/course.component';
import { StudentsComponent } from './feature/students/students/students.component';
import { CourseListComponent } from './feature/courses/course-list/course-list.component';
import { TakingCourseComponent } from './feature/courses/taking-course/taking-course.component';
import { EmployeeHomeComponent } from './feature/employee/employee-home/employee-home.component';
import { EmployeeDetailComponent } from './feature/employee/employee-home/employee-detail/employee-detail.component';
import { LearnRxjsComponent } from './feature/learn-rxjs/learn-rxjs.component';
import { LearnObservableComponent } from './feature/learn-rxjs/learn-observable/learn-observable.component';
import { SubjectComponent } from './feature/learn-rxjs/subject/subject.component';
import { BehaviorSubjectComponent } from './feature/learn-rxjs/behavior-subject/behavior-subject.component';
import { DashboardExampleComponent } from './feature/dashboard-example/dashboard-example.component';
import { DatePickerExampleComponent } from './feature/date-picker-example/date-picker-example.component';
import { DataTableExampleComponent } from './feature/data-table-example/data-table-example.component';
import { ZeroConfigComponent } from './feature/data-table-example/zero-config/zero-config.component';
import { ServerSideComponent } from './feature/data-table-example/server-side/server-side.component';
import { LoginOneComponent } from './login/login-one/login-one.component';
import { LoginTwoComponent } from './login/login-two/login-two.component';
import { JavaScriptHttpComponent } from './feature/learn-java-script/java-script-http/java-script-http.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: 'list',
        component: CourseListComponent
      },
      {
        path: 'taking',
        component: TakingCourseComponent
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'student',
    component: StudentsComponent
  },
  {
    path: 'contact-us',
    loadChildren: './feature/contact-us/contact-us.module#ContactUsModule'
  },
  {
    path: 'employee',
    component: EmployeeHomeComponent
  },
  {
    path: 'employee-detail',
    component: EmployeeDetailComponent
  },
  {
    path: 'learn-rxjs',
    component: LearnRxjsComponent,
    children: [
      {
        path: 'observable',
        component: LearnObservableComponent
      },
      {
        path: 'subjedct',
        component: SubjectComponent
      },
      {
        path: 'behavior-subjedct',
        component: BehaviorSubjectComponent
      },
      {
        path: '**',
        redirectTo: 'observable',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard-example',
    component: DashboardExampleComponent
  },
  {
    path: 'datepicker-example',
    component: DatePickerExampleComponent
  },
  {
    path: 'data-table-example',
    component: DataTableExampleComponent,
    children: [
      {
        path: 'zero-config',
        component: ZeroConfigComponent
      },
      {
        path: 'server-side',
        component: ServerSideComponent
      },
      {
        path: '**',
        redirectTo: 'zero-config',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    children: [
      {
        path: 'login-one',
        component: LoginOneComponent
      },
      {
        path: 'login-two',
        component: LoginTwoComponent
      },
      {
        path: '**',
        redirectTo: 'login-one',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'java-script',
    children: [
      {
        path: 'http',
        component: JavaScriptHttpComponent
      },
      {
        path: '**',
        redirectTo: 'http',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
