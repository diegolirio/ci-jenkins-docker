import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
		routing
  ],
  declarations: [DashComponent],
  exports: [
    DashComponent
  ]
})
export class DashboardModule { }
