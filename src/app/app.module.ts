import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApibackendService } from './apibackend.service';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { NavbarprincipalComponent } from './navbarprincipal/navbarprincipal.component';
import { OptionsComponent } from './options/options.component';
import { AddfilesComponent } from './addfiles/addfiles.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DetailsofcertComponent } from './detailsofcert/detailsofcert.component';
import { EditCertificateComponent } from './editcertificate/editcertificate.component';
import { AddJiraTicketComponent } from './add-jira-ticket/add-jira-ticket.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NavbarComponent,
    PrincipalViewComponent,
    NavbarprincipalComponent,
    OptionsComponent,
    AddfilesComponent,
    DetailsofcertComponent,
    EditCertificateComponent,
    AddJiraTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [ApibackendService,LoginViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
