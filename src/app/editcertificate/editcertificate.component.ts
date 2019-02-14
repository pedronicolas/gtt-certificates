import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificates } from '../model-data';
import { ApibackendService } from '../apibackend.service';

@Component({
  selector: 'app-editcertificate',
  templateUrl: './editcertificate.component.html',
  styleUrls: ['./editcertificate.component.scss']
})
export class EditCertificateComponent implements OnInit {
 id:number;
 alias;
 password;
 idorga;
 contact;
 repository;
 integrations;
 observations;
 certIni:Certificates;
 
  constructor(private route:ActivatedRoute, private api:ApibackendService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getCert(this.id).then((res:Certificates)=>{
      this.certIni = res;
    })
  }

  obtainCert(event) {
    let cert:Certificates ={
      id: this.id,
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
      gtt_aux.modifyCertificate(arrayBuffer2[1],cert)
          .then(()=>{
            alert('Certificado modificado');
          }).catch(console.error);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}
