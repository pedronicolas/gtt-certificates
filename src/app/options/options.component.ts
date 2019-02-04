import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { User, Jira } from '../model-data';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  // user:User;
   jira:any;
  username:string;
  role:string;
  usernamejira;
  pass;
  proyect;
  component;
  url;
  constructor(private api:ApibackendService) { }

  getUserInfo(){
    console.log();
    
    this.api.getUserInfo(localStorage.getItem('id'))
      .then((result:any)=>{
        console.log('aceptado');
        this.username = result.username;
        this.role = result.role;

        

      }).catch(error=>{
        console.log(error);
      }) 
  
  }

  addUserJiraInfo(){
    this.jira = {
      username: this.usernamejira,
      pass: this.pass,
      proyect:this.proyect,
      component:this.component,
      url: this.url,
      user_id: localStorage.getItem('id') 
    }
    this.api.addUserJiraInfo(this.jira).then((res:any)=>{
      console.log(res.status);
    }).catch(err=>{
      console.log(err);
    })
  }
  
  ngOnInit() {
    this.api.isLogged();
    this.getUserInfo();  
  }


}
