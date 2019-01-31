import { Component } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent{
  username:string;
  password:string;
  jwt :string;
  userId:number;
  constructor(private api: ApibackendService, private router: Router) { }


  login(){
    const {username,password} = this;
    if(username.trim() !== '' && password.trim() !==''){
      this.api.login(username.trim(),password.trim())
      .then((response:any)=>{
        console.log(response);
        this.router.navigate(['/home']);
        localStorage.setItem('jwt',response.jwt);
        localStorage.setItem('id',response.id_user);
        this.jwt = response.jwt;
        this.userId = response.id_user;

      })
      .catch(console.log);
    }
  }
  logOut(){
    localStorage.clear();
    this.jwt = null;
    this.userId = -1;
    this.router.navigate[('/login')];
  }
 
}
