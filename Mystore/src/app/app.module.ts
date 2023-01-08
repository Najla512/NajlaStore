import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { ProudctItemComponent } from './proudct-item/proudct-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { LocalService } from './local.service';
import { ProductsService } from './products.service';
import { UsersService } from './services/users.service';
import { ProudtslistService } from './services/proudtslist.service';
import { StorageServiceModule } from 'ngx-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CardComponent,
    LoginComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    OrderConfirmationComponent,
    ProudctItemComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    
  ],
  providers: [  { provide:LocalService ,useValue: '',multi: true},ProudtslistService,UsersService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
