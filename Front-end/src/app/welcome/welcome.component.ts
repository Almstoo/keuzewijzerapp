import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  type = ''
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    sessionStorage.removeItem('domain')
    sessionStorage.removeItem('q1')
    sessionStorage.removeItem('q2')
    sessionStorage.removeItem('q3')
    sessionStorage.removeItem('q4')
    sessionStorage.removeItem('q5')
  }

  handleEmotioneelWelzijn() {

    this.type = 'EmotioneelWelzijn'
    this.router.navigate(['users', this.name, this.type,'q1'])
    sessionStorage.setItem('domain', this.type);

  }

  handleToezichtEnVeiligheid() {

    this.type = 'ToezichitEnVeiligheid'
    this.router.navigate(['users', this.name,'ToezichtEnVeiligheid'])
    sessionStorage.setItem('domain', this.type);

  }
}
