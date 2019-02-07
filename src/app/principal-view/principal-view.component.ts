import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { LoginViewComponent } from '../login-view/login-view.component';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {
  
  idUser = this.login.userId;
  username:string;
  role:any;
  certificates;

  constructor(private api:ApibackendService,private login:LoginViewComponent) { }

  getUserInfo(){
    this.api.getUserInfo(this.idUser);
  }

  getCertificates(){
    this.api.getCertificates().then((res:any)=>{
      this.certificates = res;
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

}
