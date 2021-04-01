import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignaalTool } from 'src/app/interfaces/tool';
import { SignaalDataService } from 'src/app/services/data/signaal-data.service';

@Component({
  selector: 'app-result-g',
  templateUrl: './result-g.component.html',
  styleUrls: ['./result-g.component.css']
})
export class ResultGComponent implements OnInit {

  tools: SignaalTool[]
  name = ''
  type = ''
  domain = sessionStorage.getItem('domain')
  q1d1 = sessionStorage.getItem('q1d1')
  q1d2 = sessionStorage.getItem('q1d2')
  q2 = sessionStorage.getItem('q2')
  // q4 = sessionStorage.getItem('q4')
  // q5 = sessionStorage.getItem('q5')
  constructor(
    private signaalDataService: SignaalDataService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type'];
    console.log(this.q2);
    this.choose_product(this.name, this.q2);
  }

  choose_product(name, lastq){
    this.signaalDataService.retrieveAllToolsByLastq(name, lastq).subscribe(
      response => {
        this.tools = response;
      }
    )
  }



  // handleTerug() {

  //   this.router.navigate(['users', this.name,'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden','q2'])
  // }

  handleNieuweZoekOpdrcht() {
    this.router.navigate(['welcome', this.name])
    sessionStorage.removeItem('domain')
    sessionStorage.removeItem('q1d1')
    sessionStorage.removeItem('q1d2')
    sessionStorage.removeItem('q2')
    // sessionStorage.removeItem('q4')
    // sessionStorage.removeItem('q5')
  }
}
