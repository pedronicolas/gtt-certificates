import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira, User, Certificates } from './model-data';
import {  HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApibackendService {
  jwt:string = localStorage.getItem('jwt');
  user: string = 'api/users';
  auth: string = 'api/auth';
  jira: string = 'api/jira';
  certs:string = 'api/certificates'
  certificates: string = 'api/certificates';
  options = { headers: { Authorization: `${this.jwt}` } };


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
   return this.http.get('api/users/'+userid,this.options).toPromise();  
  }

  addUserJiraInfo(jira:Jira ){
    return this.http.post(this.jira,jira,this.options).toPromise();
  }

  modifyUserJiraInfoApi(jira:Jira){
    return this.http.put(this.jira+ '/'+ jira.user_id,jira,this.options ).toPromise();
  }
  
  isLogged(){
    if(!localStorage.getItem('jwt')|| localStorage.getItem('jwt')==='-1'){
      this.router.navigate(['/login']);
    }
  }

   getJiraInfo(){
     return this.http.get(this.jira +"/"+ localStorage.getItem('id'),this.options).toPromise();
   }

   getCertificates(){
    return this.http.get(this.certificates,this.options).toPromise();
   }
   isRoleZero(){
     if(localStorage.getItem('rol')==='1'){
       alert('No tienes permisos suficientes para acceder aquí');
       this.router.navigate(['/home']);
     }
   }

   addCertificate(fichero64:any,cert:Certificates){
     cert.fichero64 = fichero64;
    return this.http.post(this.certificates,cert,this.options).toPromise();
   }

   getCert(idCert:number){
    console.log(this.certs + idCert);
     
    return this.http.get(this.certs +'/'+ idCert,this.options).toPromise();
   }

    sendTicket(){
      return this.http.post('api/rest',this.options).toPromise();
    }

  modifyCertificate(fichero64:any,cert:Certificates){
    cert.fichero64 = fichero64;
    return this.http.put(this.certificates+'/'+cert.id,cert,this.options).toPromise();
  }  
}
