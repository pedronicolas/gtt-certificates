import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';

const routes: Routes = [{
  path: 'login', 
  component: LoginViewComponent  
},
{
  path: '', 
  component: LoginViewComponent
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
