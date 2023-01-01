import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudtslistService } from '../services/proudtslist.service';
import {product}from '../models/product';
import {LocalService}from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ProductDetailsComponent {

 // proudct: Array<product> = [];
  id:number=0;
  name:string='';
  image:string='';
  price:number=0;
  sub: any;
  products: product = new product;

  constructor(private route: ActivatedRoute,private httpService: ProudtslistService,private router: Router,private local:LocalService){}
  async ngOnInit() {
    this.sub = this.route.snapshot.params['id'];
    ( (await this.httpService.getProudectByID(this.sub)).subscribe( res => {
      this.products.id=this.route.snapshot.params['id'];
      this.products.name= this.route.snapshot.params['name'];
      this.products.image = this.route.snapshot.params['image'];
      this.products.price = this.route.snapshot.params['price'] as number;
      this.id = res.id;
      this.price= res.price;
      this.name = res.name;
      this.image = res.image;
    
    }))

  }
  //s

   addToCart(): void {
   alert('1')
   //alert(this.products.id)
     this.local.saveData(this.products)
  //  this.router.navigate(['/Mycard', { id:this.id,name:this.name,price:this.price, image:this.image}]);
  }
}
