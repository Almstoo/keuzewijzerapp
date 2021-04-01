import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  grades =
    ['Licht Verstandelijk Beperkt (IQ van 50 tot 70)',
      'Matig Verstandelijk Beperkt (IQ van 35 tot 50)',
      'Ernstig Verstandelijk Beperkt (IQ van 20 tot 35)',
      'Diep Verstandelijk Beperkt (IQ van minder dan 20)'
    ]
  errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  name = ''
  type = ''
  selectedGrade = ''
  check = false
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
  }


  radioChangeHandeler(event: any) {
    this.selectedGrade = event.target.value;
    sessionStorage.setItem('q3', this.selectedGrade);
  }

  handleq3() {
    if (this.selectedGrade != '') {
      this.router.navigate(['users', this.name, this.type, 'q4'])
    }
    else {
      this.check = true
    }
  }

  handleTerug() {
    this.router.navigate(['users', this.name, this.type, 'q2'])
    sessionStorage.removeItem('q3');
  }

  handleOverslaan() {
    this.router.navigate(['users', this.name, this.type, 'q4'])
    sessionStorage.removeItem('q3');
  }

}
