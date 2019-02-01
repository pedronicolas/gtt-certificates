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

  constructor(private api:ApibackendService) { }

  getUserInfo(){
    console.log();
    
    this.api.getUserInfo(localStorage.getItem('id'))
      .then((result:any)=>{
        this.user = result;
        console.log('aceptado');
        

      }).catch(error=>{
        console.log(error);
      })
      
  
  }
  
  ngOnInit() {
    this.getUserInfo();  
  }

  addJiraSettings(){
    
  }

}
