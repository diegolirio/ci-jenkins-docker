import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerSearchComponent, CustomerFormComponent]
})
export class CustomerModule { }
