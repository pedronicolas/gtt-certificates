import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { LoginViewComponent } from '../login-view/login-view.component';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {
  
  idUser = this.login.userId;
  username:string;
  role:any;
  constructor(private api:ApibackendService,private login:LoginViewComponent) { }

  getUserInfo(){
    this.api.getUserInfo(this.idUser)

    
    
  }

  ngOnInit() {
    
  }

}
