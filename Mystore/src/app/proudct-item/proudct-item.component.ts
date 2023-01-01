import { Component ,Input} from '@angular/core';
import {proudctslist}from '../models/proudcts_list'
import { Router } from '@angular/router';

@Component({
  selector: 'app-proudct-item',
  templateUrl: './proudct-item.component.html',
  styleUrls: ['./proudct-item.component.css']
})
export class ProudctItemComponent {

  @Input() product: proudctslist
constructor(private router: Router){
  this.product=new proudctslist;
}
  addToCart(){}

  OpenDetails(id:number): void{

    this.router.navigate(['/proudct',id]);
  }
}
