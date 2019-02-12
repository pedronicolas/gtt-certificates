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
  hasJiraInfo;
  username:string;
  role:string;
  usernamejira;
  pass;
  proyect ="SIT";
  component ="Arquitectura";
  url;
  issue = "explotacion";
  constructor(private api:ApibackendService) { }

  getUserInfo(){
    console.log();
    
    this.api.getUserInfo(localStorage.getItem('id'))
      .then((result:any)=>{
        
        this.username = result.username;
        this.role = result.role;
      }).catch(error=>{
        console.log(error);
      }) 
  
  }
  sendUserJiraInfo(){
    if (this.hasJiraInfo ===true) {
      this.modifyUserJiraInfo();
    } else {
      
      this.addUserJiraInfo();
     
    }
  }

  modifyUserJiraInfo(){
    
    if(this.username.trim() !== '' && this.pass.trim() !=''){
    this.jira = {
      username: this.usernamejira,
      pass: this.pass,
      proyect:this.proyect,
      component:this.component,
      url: this.url,
      user_id: localStorage.getItem('id') 
    }
     
    this.api.modifyUserJiraInfoApi(this.jira).then((res:any)=>{
      //console.log(res);
      this.hasJiraInfo = true;
      alert('Configurción modificada');
    }).catch(err=>{
      console.log(err);
      
    })
  }
  else{
    alert('el usuario o la contraseña no pueden ser vacios');
  }
  }
  
  
  addUserJiraInfo(){
    if(this.username !== '' && this.pass !=''){
    this.jira = {
      username: this.usernamejira,
      pass: this.pass,
      proyect:this.proyect,
      component:this.component,
      url: this.url,
      user_id: localStorage.getItem('id')

    }
    this.api.addUserJiraInfo(this.jira).then((res:any)=>{
      //console.log(res.status);
      this.hasJiraInfo = true;
    }).catch(err=>{
      console.log(err);
    })
  } else{
    alert('error');
  }
}
  
  ngOnInit() {
    this.api.isLogged();

    this.getUserInfo();
    
    this.api.getJiraInfo()
    .then((res:any)=>{
      if(res !== null){
      this.hasJiraInfo = true;
      this.usernamejira = res.username;
      this.pass = res.pass;
      this.proyect = res.proyect;
      this.component = res.component;
      this.url = res.url;
      this.issue = res.issue_type;
      }
    })

  }

}
