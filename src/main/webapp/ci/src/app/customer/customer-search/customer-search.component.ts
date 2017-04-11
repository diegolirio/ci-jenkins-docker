import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css'],
  providers: [CustomerService]
})
export class CustomerSearchComponent implements OnInit {

  private list;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.findAll().subscribe(resp => {
      this.list = resp.json();
    });
  }

}
