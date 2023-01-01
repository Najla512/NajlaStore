import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<[]>('https://localhost:3000/products')
  }

  async getUsers():Promise<Observable<proudctslist[]>>{
  //  console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
    return await this.http.get<proudctslist[]>('http://localhost:3000/products');
    
    

  }
  
  async getProudectByID(id:number):Promise<Observable<product>>{
    //  console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
      return await this.http.get<product>(`http://localhost:3000/product?id=${id}`);
      
      
  
    }
    
    

  }


