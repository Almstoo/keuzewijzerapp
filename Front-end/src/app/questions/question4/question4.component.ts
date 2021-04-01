import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
  
  characters = ['Visuele beperking', 'Auditieve beperking', 'Beperkt in handgebruik', 'Beperkt in mobiliteit', 'Autisme', 'Gedragsproblematiek',
    'Cliënt kan lezen', 'Cliënt kan schrijven'
  ]
  errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  check = false
  selectedcharacter=''
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
    this.selectedcharacter = event.target.value;
    sessionStorage.setItem('q4', this.selectedcharacter);
  }

  handleq4() {
    if (this.selectedcharacter != '') {
      this.router.navigate(['users', this.name, this.type, 'q5'])
    }
    else {
      this.check = true
    }
  }

  handleTerug() {
    this.router.navigate(['users', this.name, this.type, 'q3'])
    sessionStorage.removeItem('q4');
  }

  handleOverslaan() {
    this.router.navigate(['users', this.name, this.type, 'q5'])
    sessionStorage.removeItem('q4');
  }

}
