import { Component,Injectable,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {product}from '../models/product';
import {Cart}from '../models/Cart';

import { LocalService } from '../local.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CardComponent implements OnInit {

  @Input() card: Cart 
  //MyCard:Cart[]=[];
  //products: product = new product;


  // id: number=0;
  // name:string='';
  // image:string='';
  // price:string='';
constructor(private route: ActivatedRoute,private router: Router,private localStore: LocalService){
  this.card=new Cart
}
  ngOnInit(): void {
    //this.card=new Cart
//  this.MyCard=  this.localStore.getData('MyItems');
  //  this.id = this.route.snapshot.params['id'];
  //   this.name = this.route.snapshot.params['name'];
  //   this.image = this.route.snapshot.params['image'];
  //   this.price = this.route.snapshot.params['price'];
   
    
//this.MyCard=this.localStore.getData();

// this.route.params.subscribe(params => { 
//     this.id = params['id']; 


// });
    
  }



  checkout(){

    this.router.navigate(['/Checkout']);

  }
delete(){

  this.localStore.clearData();
}
addNewItem(){


//  this.products=[{id:this.id,name:this.name,image:this.image,price:this.price}];

}
  calculateprice(){

  }
}
