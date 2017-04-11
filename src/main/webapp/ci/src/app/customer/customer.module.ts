import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [CustomerSearchComponent, CustomerFormComponent],
  exports: [
    CustomerSearchComponent, CustomerFormComponent
  ]
})
export class CustomerModule { }
 