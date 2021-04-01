import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {


  ages: any = [
    '0-5 jaar',
    '5-10 jaar',
    '10-15 jaar',
    '15-20 jaar',
    '20-30 jaar',
    '30-40 jaar',
    '40-50 jaar',
    '50-60 jaar',
    '60-70 jaar',
    '80+ jaar'
  ]
  selectedAge = ''
  name = ''
  type = ''
  check = false
  errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']

  }

  radioChangeHandeler(event: any) {
    this.selectedAge = event.target.value;
    sessionStorage.setItem('q1', this.selectedAge);
  }

  handleq1() {
    if (this.selectedAge != '') {
      this.router.navigate(['users', this.name, this.type, 'q2'])
    }
    else{
      this.check= true
    }
  }

  handleTerug() {
    this.router.navigate(['welcome', this.name])
    sessionStorage.removeItem('q1') ;
  }

  handleOverslaan() {
    this.router.navigate(['users', this.name, this.type, 'q2'])
    sessionStorage.removeItem('q1') ;
  }
}
