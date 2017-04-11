import { Injectable } from '@angular/core';
import { Customer } from './customer'; 
import { Http } from '@angular/http';

@Injectable()
export class CustomerService {

  private list = new Array<Customer>();
  private server: string = "/cijenkinsdocker"; 


  constructor(private http: Http) { }

  save(customer: Customer) {
    //this.list.push(customer);
    console.log(this.server);
    console.log(customer);
    return this.http.post(this.server+'/api/customer/save', customer);
    //this.http.get(this.server+'/api/customer/findall').subscribe(resp => {
    //  console.log(resp.json());
    //});
  }

  findAll() {
    return this.http.get(this.server+'/api/customer/findall');  
  }

}
