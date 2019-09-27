import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { TakingCourseComponent } from './taking-course/taking-course.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent,
    TakingCourseComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ]
})
export class CoursesModule { }
