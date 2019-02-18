import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira, User, Certificates, Ticket } from './model-data';
import {  HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApibackendService {
  jwt:string = localStorage.getItem('jwt');
  user: string = 'api/users';
  auth: string = 'api/auth';
  jira: string = 'api/jira';
  certs:string = 'api/certificates';
  credentialsLoginjira:string = 'rest/auth/1/session';
  certificates: string = 'api/certificates';
  headerJira = { headers: {
    "User-Agent": "xx"
  }};
  
  options = { headers: { Authorization: `${this.jwt}` } };


  constructor(private http:HttpClient, private router:Router) { }
  

  register(username:string, password:string,role){
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
  getUsers(){
    return this.http.get(this.user).toPromise();
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
    return this.http.get(this.certs +'/'+ idCert,this.options).toPromise();
   }

    sendTicket(){
      return this.http.post('api/rest',this.options).toPromise();
    }

  modifyCertificate(fichero64:any,cert:Certificates){
    cert.fichero64 = fichero64;
    return this.http.put(this.certificates+'/'+cert.id,cert,this.options).toPromise();
  }  

  loginJira(username,password){   
    return this.http.post(this.credentialsLoginjira,{username,password},this.headerJira).toPromise();
  }
  createTicket(cuerpo:Ticket,options){
    
    return this.http.post('rest/api/2/issue/',cuerpo,options).toPromise();
  }

  download(cert:any){
    let certificateType= cert.nombreArchivo.split('.')[1]; 
    var contentType = "file/"+certificateType;
     var byteCharacters = atob(cert.fichero64);
     var byteNumbers = new Array(byteCharacters.length);

     for (var i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
     }
     var byteArray = new Uint8Array(byteNumbers);
     var blob = new Blob([byteArray], {
       type: contentType
     });
     var aux_document = document.createElement("a");
     aux_document.href = URL.createObjectURL(blob);
     aux_document.download = `${cert.nombreArchivo}`;
     document.body.appendChild(aux_document);
     aux_document.click()
  }


  isNotUndefined(...args){
    if(args.values !== undefined ){
      return true;
    }
    return false;
  }

  deleteCert(certificadoId){
    return this.http.delete(this.certificates + '/'+ certificadoId,this.options).toPromise();
  }
}
