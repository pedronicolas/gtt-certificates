import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';
import { Jira, Ticket, Certificates } from '../model-data';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Base64 } from 'js-base64';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Certificate } from 'crypto';

@Component({
  selector: 'app-add-jira-ticket',
  templateUrl: './add-jira-ticket.component.html',
  styleUrls: ['./add-jira-ticket.component.scss']
})
export class AddJiraTicketComponent implements OnInit {
  idF:number;
  jira:Jira;
  password:string;
  isLogged:boolean = false;
  headerJiraAuth:string;
  certificado;
  observations: string;


  cuerpoTicket: Ticket = {
    fields: {
       project: 
       {
          key: "SIT"
       },
       summary: "",
       description: "this.observations",
       issuetype: {
          name: "Explotacion!"
       }
   }
}
  
  constructor(private api:ApibackendService, private route:ActivatedRoute,private router:Router) { }

  
  logInJira(){
    
    
    this.api.loginJira(this.jira.username,this.password).then((res:any)=>{
      
      localStorage.setItem('jwt_jira', res.session.value);
      this.isLogged = true;
    })
  }

  crearTicket(){
    let objJsonB64 = Base64.encode(this.jira.username+":"+this.password);
    let options = { headers: { "Authorization": `Basic ${objJsonB64}`,'User-Agent': "xx" } };
    

    this.cuerpoTicket.fields.description="ISSUE IN CERT ALIAS:"+this.certificado.alias;
    this.cuerpoTicket.fields.summary = "ISSUE IN CERT ALIAS: " + this.certificado.alias;

    this.api.createTicket(this.cuerpoTicket,options).then((res)=>{
      alert('Ticket Añadido');
      this.certificado.ticket_creado = true;
      this.api.modifyCertificate(this.certificado.fichero64,this.certificado).then((res:any)=>{
        console.log(res.ticket_creado)
        this.router.navigate(['home']);
      })

    }).catch(err=>{
      console.log(err);
    })
    
  }
  
  
  
  
  ngOnInit() {
    this.idF = Number(this.route.snapshot.paramMap.get('id'));
    
    
    this.api.getCert(this.idF).then((res:any)=>{
      this.certificado = res;
    })
    
    this.api.getJiraInfo().then((res:Jira)=>{
      if(res !== null){
        this.jira= res;
        this.jira.proyect = 'SIT';
        this.jira.issue = 'Explotacion!';
        
        
        //console.log(this.jira.pass);
         
        
      }
    })
    
    
  
  }

}
