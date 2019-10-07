import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppongEditComponent } from './shopping-list/shoppong-edit/shoppong-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SignupoComponent } from './auth/signupo/signupo.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { from } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customers/customer.service';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerItemComponent } from './customers/customer-list/customer-item/customer-item.component';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppongEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupoComponent,
    SigninComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerItemComponent,
    CustomerStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    DataStorageService,
    AuthService,
    AuthGuardService,
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
