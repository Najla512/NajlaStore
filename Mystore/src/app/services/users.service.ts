import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  async login(username: string,password: string) {
  

    return await this.http.get<String>(`http://localhost:3000/login?firstname=${username}&password=${password}`);
  }


  // login(usrename: any,password: any){

  //   return this.http.get(`${baseUrl}/login?firstname=${usrename}&password=${password}`);
  // }
}
