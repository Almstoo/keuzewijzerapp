import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {
  sCharacters = ['Er mag iets ophangen worden', 'Wifi aanwezig','Internetaansluiting (UTP) aanwezig','Stopcontact aanwezig',
  'Cliënt woont op de begane grond','Cliënt woont op een hogere verdieping'
  ]
  errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  check = false
  selectedsCharacter=''
  name = ''
  type = ''
  
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
  }

 
  radioChangeHandeler(event: any) {
    this.selectedsCharacter = event.target.value;
    sessionStorage.setItem('q5', this.selectedsCharacter);
  }

  handleq5() {
    if (this.selectedsCharacter != '') {
      this.router.navigate(['users', this.name, this.type,'result'])
    }
    else {
      this.check = true
    }
  }

  handleTerug() {
    this.router.navigate(['users', this.name, this.type, 'q4'])
    sessionStorage.removeItem('q5');
  }

  handleOverslaan() {
    this.router.navigate(['users', this.name, this.type, 'result'])
    sessionStorage.removeItem('q5');
  }

}
