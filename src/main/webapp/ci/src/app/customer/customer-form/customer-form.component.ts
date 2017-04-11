import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  providers: [CustomerService]
})
export class CustomerFormComponent implements OnInit {

  private customer = new Customer();

  constructor(private router: Router,
              private customerService: CustomerService) { }

  ngOnInit() { 
  }
  
  save() {
  	//console.log(this.customer);
  	//alert(this.customer.firstname + " " + this.customer.lastname);
    this.customerService.save(this.customer).subscribe(resp => {
      this.router.navigate(['search']);
    }); 
    //this.customerService.findAll().subscribe(resp => {
    //  console.log(resp.json());
    //}); 
  }

}
