import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { OptionsComponent } from './options/options.component';
import { AddfilesComponent } from './addfiles/addfiles.component';
import{DetailsofcertComponent} from './detailsofcert/detailsofcert.component';
import { RenovateCertificatesComponent } from './renovate-certificates/renovate-certificates.component';
import { EditCertificateComponent } from './editcertificate/editcertificate.component';


const routes: Routes = [{
  path: 'login', 
  component: LoginViewComponent  
},
{
  path: 'register',
  component: RegisterViewComponent
},
{
  path: 'renovate',
  component: RenovateCertificatesComponent
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
