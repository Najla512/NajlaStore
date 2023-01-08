import { Component,Injectable,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {product}from '../models/product';
import {Cart}from '../models/Cart';
import { LocalService } from '../local.service';
//import { proudctslist } from '../models/proudcts_list';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CardListComponent {
  
  
  products: product = new product;
  
  cart:Cart[]=[];

  id: number=0;
  name:string='';
  image:string='';
  price:string='';
  constructor(private route: ActivatedRoute,private router: Router,private localStore: LocalService){}
  ngOnInit(): void {
//  this.MyCard=  this.localStore.getData('MyItems');
  //  this.id = this.route.snapshot.params['id'];
  //   this.name = this.route.snapshot.params['name'];
  //   this.image = this.route.snapshot.params['image'];
  //   this.price = this.route.snapshot.params['price'];
   
 //  this.product=new proudctslist 
this.cart=this.localStore.getData();

// this.route.params.subscribe(params => { 
//     this.id = params['id']; 


// });
    
  }
  checkout(){

    this.router.navigate(['/Checkout']);

  }
}
