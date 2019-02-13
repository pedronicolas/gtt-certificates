import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Jira, Ticket } from '../model-data';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-jira-ticket',
  templateUrl: './add-jira-ticket.component.html',
  styleUrls: ['./add-jira-ticket.component.scss']
})
export class AddJiraTicketComponent implements OnInit {
  id:number;
  jira:Jira;
  password:string;
  isLogged:boolean = false;
  headerJiraAuth:string;

  key = "SIT";
  summary = "Dale calor";
 description = "Creating of an issue using project keys and issue type names using the REST API";
  name = "Explotacion!";


  cuerpoTicket: Ticket = {
    fields: {
       project: 
       {
          key: "SIT"
       },
       summary: "Dale calor",
       description: "Creating of an issue using project keys and issue type names using the REST API",
       issuetype: {
          name: "Explotacion!"
       }
   }
}
  options = { headers: { Authorization: `${localStorage.getItem('jwt_jira')}` } };

  
  constructor(private api:ApibackendService, private route:ActivatedRoute) { }

  
  logInJira(){
    console.log('llamo');
    
    this.api.loginJira(this.jira.username,this.password).then((res:any)=>{
      
      console.log(res.session.value);
      
      localStorage.setItem('jwt_jira', res.session.value);
      this.isLogged = true;
    })
  }

  crearTicket(){
    console.log('creo');
    this.api.createTicket(this.cuerpoTicket).then((res)=>{
      console.log(res);
      alert('ticket added');
      
    }).catch(err=>{
      console.log(err);
    })
    
  }
  
  
  
  
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
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
