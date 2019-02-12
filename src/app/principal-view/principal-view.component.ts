import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { LoginViewComponent } from '../login-view/login-view.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Certificates } from '../model-data';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {
  
  idUser = this.login.userId;
  username:string;
  role:any;
  certificates:Array<Certificates>;
  subjectSplit:any;
  constructor(private api:ApibackendService,private login:LoginViewComponent) { }

  getUserInfo(){
    this.api.getUserInfo(this.idUser);
  }

  getCertificates(){
    this.api.getCertificates().then((res:any)=>{
      this.certificates = res;
      this.certificates.forEach(cert => {
        if(cert.caducado === true && cert.ticket_creado === false){
          console.log('caducado');
          var r = confirm('Certificado caducado, ¿quieres renovarlo?');
          if(r===true){
          this.api.sendTicket().then((res)=>{
            console.log('enviado');
            //Aquí tienes que hacer un put y poner el ticket_creado a true;
            
          }).catch(err=>{
            console.log(err);
          })
        }
        }
      });
      

    }).catch((err:any)=>{
      console.log(err);
    })
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
