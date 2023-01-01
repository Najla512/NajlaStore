import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {product}from './models/product';
import {Cart}from './models/Cart';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
private Mycart:Cart[]=[];
 STORAGE_KEY = 'pure-awesomeness';

constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { 

  if ( this.storage.has(this.STORAGE_KEY) ) {
    this.Mycart = this.storage.get(this.STORAGE_KEY)
  }
}

public saveData (p: product) {
alert('4')
//   this.Mycart=this.getData();

//     const newCItem = new Cart
//     newCItem.p = p


//     this.Mycart.push(newCItem)
//     console.log('4')
// //   for(let i=0;i<product.length;i++){
// // const Mycart=this.Mycart[i];
// //   }
//     //localStorage.setItem(key, JSON.stringify(value));
//     this.storage.set(this.STORAGE_KEY, this.Mycart)
//     console.log('5')
  

    const productId = p.id
    const cartItems = this.getData()

    // check if product is already in cart
    let productInCart
    for (let index = 0; index < cartItems.length; index++) {
      const cartItem = cartItems[index];
      if (cartItem.p.id === productId) {
        productInCart = cartItem
      }
    }

    
      // else, add a new cart item
      const newCartItem = new Cart
      newCartItem.p = p

      cartItems.push(newCartItem)
  alert(cartItems);

    this.storage.set(this.STORAGE_KEY, cartItems)
  }

  public  getData(): Cart []{
   // return    this.storage.get(this.STORAGE_KEY)
   return this.Mycart;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData():void {
    this.Mycart = []

  }


}
