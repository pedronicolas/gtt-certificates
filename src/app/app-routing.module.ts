import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { OptionsComponent } from './options/options.component';
import { AddfilesComponent } from './addfiles/addfiles.component';
import{DetailsofcertComponent} from './detailsofcert/detailsofcert.component';
import { EditCertificateComponent } from './editcertificate/editcertificate.component';
import { AddJiraTicketComponent } from './add-jira-ticket/add-jira-ticket.component';


const routes: Routes = [{
  path: 'login', 
  component: LoginViewComponent  
},
{
  path: 'register',
  component: RegisterViewComponent
},

{
  path: 'options',
  component: OptionsComponent
},
{
  path: 'certificate/:id',
  component: DetailsofcertComponent

},
{
  path:'addJiraTicket/:id',
  component: AddJiraTicketComponent
},
{
  path: 'certificatechange/:id',
  component: EditCertificateComponent

},
{
  path: '', 
  component: PrincipalViewComponent
},
{
  path: 'home',
  component: PrincipalViewComponent
},
{
  path:'upload',
  component: AddfilesComponent
},
{
  path: '**', 
  redirectTo:'login', 
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
