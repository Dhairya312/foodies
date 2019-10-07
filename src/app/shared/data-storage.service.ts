import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Customer } from '../customers/customer.model';

import { RecipeService } from '../recipes/recipe.service';
import { CustomerService } from '../customers/customer.service';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  // url = 'https://ng-recipe-book-33b00.firebaseio.com/recipes.json';
  url = 'http://demoao.neofruition.co.in:81/api/v1/';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private customerService: CustomerService,
    private htttp: Http
  ) { }

  storeRecipes() {
    const  token = this.authService.getToken();
    return this.http.put(this.url+'?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // return this.http.get(this.url+'?auth=' + token);
    // const token = this.authService.getToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' +this.authService.getToken(),
      })
    };
    return this.http.get(this.url+'grade');
  }

  getCustomers() {
    return this.http.get(this.url+'grade')
    .subscribe(
      (customer: any) => {
        this.customerService.setCustomer(customer.dataList);
      }
    );
  }

  saveCustomer() {
    return this.http.post(this.url+'grade', this.customerService.getCustomers())
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
