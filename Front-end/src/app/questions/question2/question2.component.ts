import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  selectedOage = ''
  oAges = [
    'baby', 'peuter', 'kleuter', 'schoolkind', 'puber', 'volwassene', 'senior'
  ]
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
    this.selectedOage = event.target.value;
    sessionStorage.setItem('q2', this.selectedOage);
  }

  handleq2() {
    if (this.selectedOage !='') {
      this.router.navigate(['users', this.name, this.type, 'q3'])
    }
    else {
      this.check = true
    }
  }

  handleTerug() {
    this.router.navigate(['users', this.name, this.type, 'q1'])
    sessionStorage.removeItem('q2');
  }

  handleOverslaan() {
    this.router.navigate(['users', this.name, this.type, 'q3'])
    sessionStorage.removeItem('q2');
  }
}
