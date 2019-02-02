import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { LoginViewComponent } from '../login-view/login-view.component';
import { User, Jira } from '../model-data';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  user:User;
  jira:Jira;
  username;
  constructor(private api:ApibackendService) { }

  getUserInfo(){
    console.log();
    
    this.api.getUserInfo(localStorage.getItem('id'))
      .then((result:any)=>{
        this.user = result;
        console.log('aceptado');
        this.username = this.user.username;
        console.log(this.username);

      }).catch(error=>{
        console.log(error);
      }) 
  
  }

  addUserJiraInfo(){
    this.jira.user_id = this.user.id;
    this.api.addUserJiraInfo(this.jira).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
  
  ngOnInit() {
    this.getUserInfo();  
  }


}
