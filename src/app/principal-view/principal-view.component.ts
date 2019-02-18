import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { LoginViewComponent } from '../login-view/login-view.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Certificates } from '../model-data';
import { Router } from '@angular/router';
import { elementContainerEnd } from '@angular/core/src/render3';
import { $$ } from 'protractor';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {
  
  idUser = this.login.userId;
  username:string;
  role:string = localStorage.getItem('rol'); 
  certificates:Array<Certificates>;
  subjectSplit:any;
  constructor(private api:ApibackendService,private login:LoginViewComponent,private router:Router) { }

  getUserInfo(){
    this.api.getUserInfo(this.idUser);
  }

  someToRenovate(certs:Array<Certificates>){
    let contador = 0;
    certs.forEach(element => {
      if(element.caducado === true && element.ticket_creado === false){
        contador++;
      }
    }); 
    if(contador >= 1){
      return true;
    } else{
      return false;
    }
    
  }

  getCertificates(){
    this.api.getCertificates().then((res:any)=>{
      if(res !=null){
        this.certificates = res;
        if(this.someToRenovate(this.certificates)===true){
          alert('Hay certificados caducados, pulsa el botón en el menú para comprobarlos');
        }
        
      } 
      
    }).catch((err:any)=>{
      console.log(err);
    })
  }


   download(cert:any){
    this.api.download(cert);
   }


  ngOnInit() {
    this.api.isLogged();
    this.getCertificates();
  }

  ordenateSortAlias(){
    this.certificates.sort((a,b)=>{
      if (a.alias > b.alias) {
        return 1;
      }
      if (a.alias < b.alias) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

  ordenateSortCad(){
    this.certificates.sort((a,b)=>{
      if (a.fechaCaducidad > b.fechaCaducidad) {
        return 1;
      }
      if (a.fechaCaducidad < b.fechaCaducidad) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }
  ordenateSortNom(){
    this.certificates.sort((a,b)=>{
      if (a.nombreCliente > b.nombreCliente) {
        return 1;
      }
      if (a.nombreCliente < b.nombreCliente) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

  
}
