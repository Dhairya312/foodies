import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupoComponent } from './auth/signupo/signupo.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { CustomersComponent } from './customers/customers.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent , children: [
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]  },
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]  }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuardService] },
  { path: 'signupo', component: SignupoComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuardService], children: [
    { path: 'newCustomer', component: CustomerEditComponent },
    { path: '', component: CustomerStartComponent },
    { path: ':id', component: CustomerDetailComponent },
    { path: ':id/edit', component: CustomerEditComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
