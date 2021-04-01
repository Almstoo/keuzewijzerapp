import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErorrComponent } from './erorr/erorr.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToolsComponent } from './list-tools/list-tools.component';
import { LogoutComponent } from './logout/logout.component';
import { RoutegardService } from './services/routegard.service';
import { ToolComponent } from './tool/tool.component';
import { Question1Component } from './questions/question1/question1.component';
import { Question2Component } from './questions/question2/question2.component';
import { Question3Component } from './questions/question3/question3.component';
import { Question5Component } from './questions/question5/question5.component';
import { Question4Component } from './questions/question4/question4.component';
import { ResultComponent } from './questions/result/result.component';
import { TestComponent } from './test/test.component';
import { IkWilAlarmerenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-alarmeren/ik-wil-alarmeren.component';
import { IkWilGesignaleerdWordenComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/ik-wil-gesignaleerd-worden.component';
import { ResultGComponent } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/result-g/result-g.component';
import { ToezichtEnVeiligheidComponent } from './welcome/toezicht-en-veiligheid/toezicht-en-veiligheid.component';
import { ResultAComponent } from './welcome/toezicht-en-veiligheid/ik-wil-alarmeren/result-a/result-a.component';
import { MeteenQ2Component } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/meteen-q2/meteen-q2.component';
import { NaXMinutenQ2Component } from './welcome/toezicht-en-veiligheid/ik-wil-gesignaleerd-worden/na-x-minuten-q2/na-x-minuten-q2.component';



const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent, canActivate:[RoutegardService]  },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/tools', component: ListToolsComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/tools/:id', component: ToolComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/q1' , component: Question1Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/q2' , component: Question2Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/q3' , component: Question3Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/q4' , component: Question4Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/q5' , component: Question5Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/:type/result' , component: ResultComponent, canActivate:[RoutegardService]  },
  { path: 'users/test' , component: TestComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid' , component: ToezichtEnVeiligheidComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid/IkWilAlarmeren/q1', component: IkWilAlarmerenComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid/IkWilGesignaleerdWorden/q1', component: IkWilGesignaleerdWordenComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid/IkWilGesignaleerdWorden/meteenQ2', component: MeteenQ2Component, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid/IkWilGesignaleerdWorden/naXminutenQ2', component: NaXMinutenQ2Component, canActivate:[RoutegardService]  },

  { path: 'users/:name/ToezichtEnVeiligheid/IkWilGesignaleerdWorden/result', component: ResultGComponent, canActivate:[RoutegardService]  },
  { path: 'users/:name/ToezichtEnVeiligheid/IkWilAlarmeren/result', component: ResultAComponent, canActivate:[RoutegardService]  },


  

  { path: '**', component: ErorrComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
