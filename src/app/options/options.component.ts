import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
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
  role;
  constructor(private api:ApibackendService) { }

  getUserInfo(){
    console.log();
    
    this.api.getUserInfo(localStorage.getItem('id'))
      .then((result:any)=>{
        this.user = result;

        console.log('aceptado');
        this.username = result.username;
        this.role = result.role;

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
