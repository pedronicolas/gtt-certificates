import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import {Certificates} from '../model-data';
import { Router } from '@angular/router';

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
  
  
  constructor(private api: ApibackendService, private rou: Router) { }

  ngOnInit() {
    this.api.isRoleZero();
  }

  obtainCert(event) {
    if(this.alias != undefined && this.password != undefined && this.idorga != null){
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
        fichero64:"",
        nombreArchivo: event.target.value.split("\\")[2],
        caducado:false,
        ticket_creado:false
      }
      
      
      
      
      var reader = new FileReader();
      var arrayBuffer;
      let gtt_aux = this.api;
      reader.onload = function(){
        arrayBuffer = reader.result;
        var arrayBuffer2 = arrayBuffer.split(',');
        gtt_aux.addCertificate(arrayBuffer2[1],cert)
            .then(()=>{
              alert('Certificado añadido');
            }).catch(err=>{
              alert('Algún campo introducido no es correcto');
                
             
            });
      };
      reader.readAsDataURL(event.target.files[0]);
   
    } else{
      alert('Comprueba que todos los campos están rellenados');
    }
  }

}
