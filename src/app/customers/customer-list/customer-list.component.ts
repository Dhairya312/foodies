import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[];
  subscription: Subscription;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.subscription =   this.customerService.customerChanged
                              .subscribe(
                                (customers: Customer[]) => {
                                  this.customers = customers;
                                },
                                (error: Error) => {
                                  console.error(error);
                                }
                              );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewCustomer() {
    this.router.navigate(['newCustomer'], {relativeTo: this.route});
  }

  onGetCustomer() {
    this.dataStorageService.getCustomers();
  }

  onSaveCustomer() {
    this.dataStorageService.saveCustomer();
  }
}
