import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  name = ''
  type = ''
  domain = sessionStorage.getItem('domain')
  q1 = sessionStorage.getItem('q1')
  q2 = sessionStorage.getItem('q2')
  q3 = sessionStorage.getItem('q3')
  q4 = sessionStorage.getItem('q4')
  q5 = sessionStorage.getItem('q5')
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
  }



  handleTerug() {

    this.router.navigate(['users', this.name, this.type, 'q5'])
  }

  handleNieuweZoekOpdrcht() {
    this.router.navigate(['welcome', this.name])
    sessionStorage.removeItem('domain')
    sessionStorage.removeItem('q1')
    sessionStorage.removeItem('q2')
    sessionStorage.removeItem('q3')
    sessionStorage.removeItem('q4')
    sessionStorage.removeItem('q5')
  }
}
