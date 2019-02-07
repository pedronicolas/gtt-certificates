import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.scss']
})
export class AddfilesComponent implements OnInit {

  afuConfig = {
    multiple: false,
    formatsAllowed: ".pfx,.p12",
    maxSize: "25",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
      }
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true
};
  constructor(private api: ApibackendService) { }

  ngOnInit() {
    this.api.isRoleZero();
  }

  obtainCert(event) {
    var reader = new FileReader();
    var arrayBuffer;
    let gtt_aux = this.api;
    reader.onload = function(){
      arrayBuffer = reader.result;
      console.log();
      var arrayBuffer2 = arrayBuffer.split(',');
      console.log(arrayBuffer2);
      
      // let arrayBuffer2 = arrayBuffer.substring(33); // Para quitar data:application/x-pkcs12;base64,
      // console.log(arrayBuffer);
      // console.log(arrayBuffer2);
      
      gtt_aux.addCertificate(arrayBuffer2[1])
          .then(console.log).catch(console.error);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}
