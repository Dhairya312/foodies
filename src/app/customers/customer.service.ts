import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CustomerService {
  customerChanged = new Subject<Customer[]>();
  private customers: Customer[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + this.authService.getToken(),
    })
  };
  constructor(
    private htttp: Http,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  setCustomer(customers) {
    this.customers = customers;
    this.customerChanged.next(this.customers.slice());
  }

  getCustomers() {
    return this.customers.slice();
  }

  getCustomer(index: number) {
    return this.customers[index];
  }

  addCustomer(customer: Customer) {
    // this.customers.push(customer);
    // this.customerChanged.next(this.customers.slice());

    return this.http.post('http://demoao.neofruition.co.in:81/api/v1/grade/save', customer, this.httpOptions)
      .subscribe(
        (response) => {
          if(response !== this.customers){
            console.log(response);
          } else {
            console.error(response);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  updateCustomer(index: number, newCustomer: Customer) {
    this.customers[index] = newCustomer;
    // this.customerChanged.next(this.customers.slice());
    return this.http.post('http://demoao.neofruition.co.in:81/api/v1/grade/update', newCustomer, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  deleteCustomer(customer: Customer) {
    // this.customers.splice(index, 1);
    // this.customerChanged.next(this.customers.slice());
    if(confirm("Are you sure want to delete this record.")){
    return this.http.post('http://demoao.neofruition.co.in:81/api/v1/grade/delete', customer , this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
