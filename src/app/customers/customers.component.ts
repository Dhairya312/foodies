import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
 
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
  }

}
