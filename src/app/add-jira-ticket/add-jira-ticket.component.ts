import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Jira } from '../model-data';

@Component({
  selector: 'app-add-jira-ticket',
  templateUrl: './add-jira-ticket.component.html',
  styleUrls: ['./add-jira-ticket.component.scss']
})
export class AddJiraTicketComponent implements OnInit {
  jira:Jira;
  constructor(private api:ApibackendService) { }

  ngOnInit() {
    this.api.getJiraInfo().then((res:any)=>{
      if(res !== null){
        this.jira= res;
        this.jira.proyect = 'SIT';
        this.jira.issue = 'Explotacion!';
        console.log(this.jira.issue);
        
      }
    })
     
    if (this.jira != null){
      this.api.loginJira(this.jira.url,this.jira.username,this.jira.pass).then((res:any)=>{
        localStorage.setItem('jwt_jira', res.session.value);
      })
    }
  
  
  }

}
