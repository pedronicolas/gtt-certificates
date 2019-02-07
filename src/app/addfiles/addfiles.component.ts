import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import {Certificates} from '../model-data';

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.scss']
})
export class AddfilesComponent implements OnInit {
  alias;
  password;
  idorga;
  contact;
  repository;
  integrations;
  observations;
  
  
  constructor(private api: ApibackendService) { }

  ngOnInit() {
    this.api.isRoleZero();
  }

  obtainCert(event) {
    let cert:Certificates ={
      id: undefined,
      alias:this.alias,
      entidadEmisora:"",
      numeroSerie:"",
      subject:"",
      fechaCaducidad:new Date(),
      password:this.password,
      idOrga:+this.idorga,
      nombreCliente:this.idorga,
      listaIntegraciones:this.integrations,
      email:this.contact,
      observaciones:this.observations,
      eliminado:false,
      repositorio:this.repository,
      fichero64:""
    }
    
    
    
    
    var reader = new FileReader();
    var arrayBuffer;
    let gtt_aux = this.api;
    reader.onload = function(){
      arrayBuffer = reader.result;
      //console.log();
      var arrayBuffer2 = arrayBuffer.split(',');
      //console.log(arrayBuffer2);
      
      // let arrayBuffer2 = arrayBuffer.substring(33); // Para quitar data:application/x-pkcs12;base64,
      // console.log(arrayBuffer);
      // console.log(arrayBuffer2);
      
      gtt_aux.addCertificate(arrayBuffer2[1],cert)
          .then(console.log).catch(console.error);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}
