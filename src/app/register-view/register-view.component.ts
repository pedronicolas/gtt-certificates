import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  username:string;
  password:string;
  valid:any;
  error:any;
  correct:any;
  aceptado:string = "Registro realizado correctamente";
  rol = 1;
  constructor(private api: ApibackendService, private router:Router ) { }

  register(){
    const {username,password,rol} = this;
     if(username.trim()!== '' && password.trim()!==''){
       this.api.register(username.trim(),password.trim(),this.rol)
       .then((res:any)=>{
         this.valid = res;
         this.correct = res.comment; 
         console.log(res);
         })
       .catch(error=>{
         this.error = error;
         console.log(error);
         
       })
     } else{
       console.error('error');
       
     }
   }
   ngOnInit(){
    this.api.isLogged(); 
    this.api.isRoleZero();
   }
}
