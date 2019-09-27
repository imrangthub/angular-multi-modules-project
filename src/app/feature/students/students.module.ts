import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentBlogModule } from '../student-blog/student-blog.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentBlogModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
