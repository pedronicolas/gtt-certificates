import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Router } from '@angular/router';

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
  correct:any;
  aceptado:string = "Registro realizado correctamente";
  constructor(private api: ApibackendService, private router:Router) { }

  register(){
    const {username,password} = this;
     if(username.trim()!== '' && password.trim()!==''){
       this.api.register(username.trim(),password.trim())
       .then((res:any)=>{
         this.valid = res;
         this.correct = res.comment; 
         console.log(res);
        if(this.correct === this.aceptado){
          setTimeout(()=>{
            this.router.navigate(['/login']);
           },5000)
   
        }   })
       .catch(error=>{
         this.error = error;
         console.log(error);
         
       })
     }
   }

}
