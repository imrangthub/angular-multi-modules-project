import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './feature/courses/course/course.component';
import { StudentsComponent } from './feature/students/students/students.component';
import { CourseListComponent } from './feature/courses/course-list/course-list.component';
import { TakingCourseComponent } from './feature/courses/taking-course/taking-course.component';

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
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
