import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewComponent } from '../login-view/login-view.component';
import { ApibackendService } from '../apibackend.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'navbarprincipal',
  templateUrl: './navbarprincipal.component.html',
  styleUrls: ['./navbarprincipal.component.scss']
})
export class NavbarprincipalComponent {
  rutaDestino:string;
  constructor(private router: Router, private api:ApibackendService) { }

   changeHomePage(ev){
      this.rutaDestino = ev.target.value.trim();
      this.router.navigate([this.rutaDestino]);
      if (this.rutaDestino== '/logout'){
        this.api.logOut();
      }
   }
  
   logOut(){
     this.api.logOut();
     
   }
      
}

  
  
