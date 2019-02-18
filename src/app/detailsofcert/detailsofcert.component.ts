import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApibackendService } from '../apibackend.service';
import { Certificates } from '../model-data';


@Component({
  selector: 'app-detailsofcert',
  templateUrl: './detailsofcert.component.html',
  styleUrls: ['./detailsofcert.component.scss']
})
export class DetailsofcertComponent implements OnInit {
  id:number;
  certificado:Certificates;
  rol = localStorage.getItem('rol');
  constructor(private route: ActivatedRoute, public apiD:ApibackendService, private router:Router) { }

  download(){
    this.apiD.download(this.certificado);
   }


   deleteCert(certificadoId){
    console.log(certificadoId);
    
    this.apiD.deleteCert(certificadoId).then(()=>{
      alert('Certificado Eliminado');
      this.router.navigate(['/home']);
    })
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.apiD.getCert(this.id).then((res:Certificates)=>{
        this.certificado = res;
        
        
      }).catch(err=>{
        console.log(err);
      })
    
   
  }

}
