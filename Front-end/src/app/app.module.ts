import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErorrComponent } from './erorr/erorr.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToolsComponent } from './list-tools/list-tools.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolComponent } from './tool/tool.component';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';
import { Question1Component } from './questions/question1/question1.component';
import { Question2Component } from './questions/question2/question2.component';
import { Question3Component } from './questions/question3/question3.component';
import { Question4Component } from './questions/question4/question4.component';
import { Question5Component } from './questions/question5/question5.component';
import { ResultComponent } from './questions/result/result.component';
import { TestComponent } from './test/test.component';
import { IkWilAlarmerenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-alarmeren/ik-wil-alarmeren.component';
import { IkWilGesignaleerdWordenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/ik-wil-gesignaleerd-worden.component';
import { IkWilGehoordWordenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gehoord-worden/ik-wil-gehoord-worden.component';
import { IkWilGezienWordenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gezien-worden/ik-wil-gezien-worden.component';
import { ResultGComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/result-g/result-g.component';
import { ToezichtEnVeiligheidComponent } from './welcome/toezicht-en-veiligheid/toezicht-en-veiligheid.component';
import { ResultAComponent } from './welcome/toezicht-en-veiligheid/ik-wil-alarmeren/result-a/result-a.component';
import { MeteenQ2Component } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/meteen-q2/meteen-q2.component';
import { NaXMinutenQ2Component } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/na-x-minuten-q2/na-x-minuten-q2.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErorrComponent,
    WelcomeComponent,
    ListToolsComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    ToolComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    ResultComponent,
    TestComponent,
    IkWilGesignaleerdWordenComponent,
    IkWilGehoordWordenComponent,
    IkWilGezienWordenComponent,
    IkWilAlarmerenComponent,
    ResultGComponent,
    ToezichtEnVeiligheidComponent,
    ResultAComponent,
    MeteenQ2Component,
    NaXMinutenQ2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
