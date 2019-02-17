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

  modifyCert() {
   if(this.api.isNotUndefined(this.alias,this.password,this.idorga,this.contact,this.repository,this.integrations,this.observations)===true){
    this.api.modifyCertificate(this.certIni.fichero64,this.certIni)
          .then(()=>{
            alert('Certificado modificado');
          }).catch(console.error);
  } else{
    alert('Alguno de los campos se encuentra vacío.');
  }
  }
}


