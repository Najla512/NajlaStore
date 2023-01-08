import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import {proudctslist}from '../models/proudcts_list';
import {product}from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProudtslistService {
 // public proudcts: proudctslist[]=[]
  constructor(private http: HttpClient) { 
    //this.getUsers()
   
  }
  getComments(): Observable<[]> {
    alert('../assets/data.json')
    return this.http.get<[]>('../assets/dat.json')
  }

   getUsers():Observable<proudctslist[]>{
  //  console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
    return  this.http.get<proudctslist[]>('../assets/data.json');
    
    

  }
  
  async getProudectByID(id:number):Promise<Observable<product>>{
    //  console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
   //   return await this.http.get<product>(`http://localhost:3000/product?id=${id}`);

      return this.http.get<product>('../assets/data.json')
  
    }
    
    

  }


