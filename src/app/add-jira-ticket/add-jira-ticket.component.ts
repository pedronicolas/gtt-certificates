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
  password:string;
  isLogged:boolean = false;
  
  constructor(private api:ApibackendService) { }

  
  logInJira(){
    console.log('llamo');
    
    this.api.loginJira(this.jira.username,this.password).then((res:any)=>{
      
      console.log(res.session.value);
      
      localStorage.setItem('jwt_jira', res.session.value);
      this.isLogged = true;
    })
  }
  
  
  
  
  ngOnInit() {
    this.api.getJiraInfo().then((res:any)=>{
      if(res !== null){
        this.jira= res;
        this.jira.proyect = 'SIT';
        this.jira.issue = 'Explotacion!';
        console.log(this.jira.issue);
        console.log(this.isLogged);
        
        //console.log(this.jira.pass);
         
        
      }
    })
     
  
  }

}
