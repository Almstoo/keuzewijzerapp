import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toezicht-en-veiligheid',
  templateUrl: './toezicht-en-veiligheid.component.html',
  styleUrls: ['./toezicht-en-veiligheid.component.css']
})
export class ToezichtEnVeiligheidComponent implements OnInit {

  name = '';
  type = '';
  bottunName=''

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
  }


  handleTerug() {
    this.router.navigate(['welcome', this.name])
    sessionStorage.removeItem('q1');
  }

  handleAlarmeren() {
   
    console.log('tType');

    this.router.navigate(['users', this.name,'ToezichtEnVeiligheid','IkWilAlarmeren','q1'])
    // this.router.navigate(['welcome', this.name])
    // sessionStorage.removeItem('q1');
  }

  handleGesignaleerd() {
   
    console.log('tType');

    this.router.navigate(['users', this.name,'ToezichtEnVeiligheid','IkWilGesignaleerdWorden','q1'])
    // this.router.navigate(['welcome', this.name])
    // sessionStorage.removeItem('q1');
  }
}
