import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { OptionsComponent } from './options/options.component';

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
  path: '', 
  component: PrincipalViewComponent
},
{
  path: 'home',
  component: PrincipalViewComponent
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
