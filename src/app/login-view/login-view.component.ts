import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit{
  username:string;
  password:string;
  jwt :string;
  userId:number;
  comment:any;
  error;
  constructor(private api: ApibackendService, private router: Router) { }


  login(){
    const {username,password} = this;
    if(username.trim() !== '' && password.trim() !==''){
      this.api.login(username.trim(),password.trim())
      .then((response:any)=>{
        console.log(response);
        console.log(this.comment);
        if(response.status===204){ 
        this.comment = response.comment;
        } else{
          this.router.navigate(['/home']);
        }
        localStorage.setItem('jwt',response.jwt);
        localStorage.setItem('id',response.id_user);
        localStorage.setItem('rol',response.role);
        this.jwt = response.jwt;
        this.userId = response.id_user;

      })
      .catch(console.log);
    }
  }

  ngOnInit(){
    this.api.isLogged();
  }
  
}
