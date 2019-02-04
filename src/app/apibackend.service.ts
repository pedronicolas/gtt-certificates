import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { Jira, User } from './model-data';
import { Local } from 'protractor/built/driverProviders';


@Injectable({
  providedIn: 'root'
})
export class ApibackendService {
  jwt:string = localStorage.getItem('id');
  user: string = 'api/users';
  auth: string = 'api/auth';
  jira: string = 'api/jira';
  authorization:string = `Bearer: ${this.jwt}`;

  constructor(private http:HttpClient, private router:Router) { }
  

  register(username:string, password:string){
    console.log("cipoEntra");
    
    return this.http.post(this.user,{username,password})
     .toPromise();
  }

  login(username,password){
      return this.http.post(this.auth,{username,password})
        .toPromise();
        

    }

  logOut(){
    localStorage.clear();
    this.jwt = null; 
  }  

  getUserInfo(userid){
   return this.http.get('api/users/'+userid).toPromise();  
  }

  addUserJiraInfo(jira:Jira ){
    return this.http.post(this.jira,jira).toPromise();
  }
  
  isLogged(){
    if(!localStorage.getItem('jwt')|| localStorage.getItem('jwt')==='-1'){
      this.router.navigate(['/login']);
    }
  }

}
