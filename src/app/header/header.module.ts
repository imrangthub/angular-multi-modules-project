import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main/header-main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderMainComponent],
  imports: [
    CommonModule,
    AppRoutingModule

  ],
  exports: [
    HeaderMainComponent
  ]
})
export class HeaderModule { }
