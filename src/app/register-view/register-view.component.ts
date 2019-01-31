import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent {
  username:string;
  password:string;
  valid:any;
  error:any;
  constructor(private api: ApibackendService) { }

  register(){
    const {username,password} = this;
     if(username.trim()!== '' && password.trim()!==''){
       this.api.register(username.trim(),password.trim())
       .then(res=>{
         this.valid = res;
         console.log(res);
       })
       .catch(error=>{
         this.error = error;
         console.log(error);
         
       })
     }
   }

}
