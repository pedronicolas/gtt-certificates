import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira, User, Certificates } from './model-data';
import {  HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApibackendService {
  jwt:string = localStorage.getItem('id');
  user: string = 'api/users';
  auth: string = 'api/auth';
  jira: string = 'api/jira';
  certs:string = 'api/certificates'
  certificates: string = 'api/certificates';
  authorization:string = `Bearer: ${this.jwt}`;


  constructor(private http:HttpClient, private router:Router) { }
  

  register(username:string, password:string,role){
    console.log("cipoEntra");
      console.log(role);
    return this.http.post(this.user,{username,password,role})
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

  modifyUserJiraInfo(jira:Jira){
    return this.http.put(this.jira+ '/'+ localStorage.getItem('id'),jira ).toPromise();
  }
  
  isLogged(){
    if(!localStorage.getItem('jwt')|| localStorage.getItem('jwt')==='-1'){
      this.router.navigate(['/login']);
    }
  }

   getJiraInfo(){
     return this.http.get(this.jira +"/"+ localStorage.getItem('id')).toPromise();
   }

   getCertificates(){
    return this.http.get(this.certificates).toPromise();
   }
   isRoleZero(){
     if(localStorage.getItem('rol')==='1'){
       alert('No tienes permisos suficientes para acceder aquí');
       this.router.navigate(['/home']);
     }
   }

   addCertificate(fichero64:any,cert:Certificates){
     cert.fichero64 = fichero64;
    return this.http.post(this.certificates,cert).toPromise();
   }

   getCert(idCert:number){
    console.log(this.certs + idCert);
     
    return this.http.get(this.certs +'/'+ idCert).toPromise();
   }

}
