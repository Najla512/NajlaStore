import { Component,Input,OnInit } from '@angular/core';
import {UsersService}from '../services/users.service';
import { Router } from '@angular/router';
import {user}from '../models/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  submitted = false;

 // users:user[]=[];
  // users:user[]=[];
  @Input()
  firstname!: string;password!:string;

  constructor(private httpService: UsersService,private router: Router) {
   
    
   }

   ngOnInit() {
   // this.firstname = this.cms.getContent(this.id);
  }
 
  async onSubmit(): Promise<void> {

    let resulat='';
     (await this.httpService.login(this.firstname, this.password)).subscribe(data => {
    resulat = data.toString();
    if(resulat=='true'){

   this.router.navigate(['/products']);
     alert(`${this.firstname} has successfully signed in!`);
    }else{
      alert('there is an error');
  
      
    }   

  
    });
   
  
   

  }

  
}
