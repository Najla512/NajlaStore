import { Component ,OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {proudctslist}from '../models/proudcts_list'
import { ProudtslistService } from '../services/proudtslist.service';
//import * as data from '../assets/data.json';  

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
    proudct:proudctslist[]=[] ;

  constructor(private httpService: ProudtslistService,private router: Router) { }

   ngOnInit():void{
// this.proudct=JSON.parse(data.toString()) 
this.httpService.getUsers().subscribe(res =>
  {   
      this.proudct = res;
      console.log(this.proudct);
  });
  }
  MyCard(){
    this.router.navigate(['/Mycard']);
  }
  
  }
