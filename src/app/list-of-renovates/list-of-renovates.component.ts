import { Component, OnInit } from '@angular/core';
import { Certificates } from '../model-data';
import { ApibackendService } from '../apibackend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-renovates',
  templateUrl: './list-of-renovates.component.html',
  styleUrls: ['./list-of-renovates.component.scss']
})
export class ListOfRenovatesComponent implements OnInit {
  certificates:Array<Certificates>;
  filtered;
  constructor(private api:ApibackendService, private route:Router) { }

  arrayFiltered(arr:Certificates){
    if (arr.ticket_creado === false && arr.caducado === true) return true;
  }
  
  ngOnInit() {
    this.api.getCertificates().then((res:Array<Certificates>)=>{
      this.certificates = res;
      this.filtered = this.certificates.filter(this.arrayFiltered);
      //this.arrayFiltered(this.certificates);
    })
  }


}
