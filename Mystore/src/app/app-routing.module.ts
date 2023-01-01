import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardComponent } from './card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [ 
{ path: '', component: LoginComponent},
//{ path: 'login', component: LoginComponent },
{ path: 'products', component: ProductsListComponent },
{ path: 'proudct/:id', component: ProductDetailsComponent},
{ path: 'Mycard', component: CardComponent},
{ path: 'Checkout', component: CheckoutComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
