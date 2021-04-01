import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlarmDataService } from 'src/app/services/data/alarm-data.service';
import { AlarmTool } from 'src/app/list-tools/list-tools.component';
// import { alarmTool } from 'src/app/interfaces/tool';

@Component({
  selector: 'app-result-a',
  templateUrl: './result-a.component.html',
  styleUrls: ['./result-a.component.css']
})
export class ResultAComponent implements OnInit {
  
  tools: AlarmTool[]
  user: String = sessionStorage.getItem('authUser');
  name = ''
  type = ''
  domain = sessionStorage.getItem('domain')
  filter1 = sessionStorage.getItem('filter1')
  filter2 = sessionStorage.getItem('filter2')
  // filter2t = sessionStorage.getItem('filter2t')
 
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private alarmDataService: AlarmDataService
  ) { }

  ngOnInit() {
    
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
    this.refreshMyTools(this.name, this.filter2);
  }

  refreshMyTools(user, lastq) {
    this.alarmDataService.retrieveAllToolsByLastq(user, lastq).subscribe(
      response => {
        this.tools = response;
      }
    )
  }


  handleTerug() {
    this.router.navigate(['users', this.name,'ToezichtEnVeiligheid', 'IkWilAlarmeren','q1'])
    sessionStorage.removeItem('domain')
    sessionStorage.removeItem('filter1')
    sessionStorage.removeItem('filter2')
  }

  handleNieuweZoekOpdrcht() {
    this.router.navigate(['welcome', this.name])
    sessionStorage.removeItem('domain')
    sessionStorage.removeItem('filter1')
    sessionStorage.removeItem('filter2')

  }

}
