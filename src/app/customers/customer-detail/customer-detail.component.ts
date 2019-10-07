import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
        this.customer = this.customerService.getCustomer(this.id);
      }
    );
  }

  onEditCustomer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.customer);
    this.router.navigate(['/customers']);
  }

}
