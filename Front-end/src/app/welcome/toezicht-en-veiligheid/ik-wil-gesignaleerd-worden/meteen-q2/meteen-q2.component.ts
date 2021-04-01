import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { text_value } from 'src/app/interfaces/tool';

@Component({
  selector: 'app-meteen-q2',
  templateUrl: './meteen-q2.component.html',
  styleUrls: ['./meteen-q2.component.css']
})
export class MeteenQ2Component implements OnInit {

  items2: text_value[] = [
    {
      text: 'als client bed/kamer verlaat',
      value: 'kamer_verlaat'
    },
    {
      text: 'Als er een storing is in de sonde voeding pomp. Of als de voeding op is.',
      value: 'voeding_pomp'
    }
  ]

  items: text_value[] = [
    {
      text: 'Als cliënt valt',
      value: 'val'
    },
    {
      text: 'Als cliënt gebraakt heb/incontinent geweest ben',
      value: 'gebraakt'
    },
    {
      text: 'Als ik epileptische activiteit heb waarbij sprake is van schudbewegingen.',
      value: 'epileptische'
    }
  ]

  q1d1: String = ""
  q1d2: String = ""
  selectedItem_N_lichaam = ''
  selectedItem_lichaam = ''

  name = ''
  type = ''

  check_meteen_ja = false
  check_meteen_nee = false
  check_volgende= false

  // errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
    this.type = this.activatedroute.snapshot.params['type']
    this.choose();
  }

  choose() {
    this.q1d1 = sessionStorage.getItem('q1d1');
    this.q1d2 = sessionStorage.getItem('q1d2');

    if (this.q1d1 == 'meteen' && this.q1d2 == 'ja') {
      this.check_meteen_ja = true
    }
    else {
      this.check_meteen_nee = true
    }
  }

  radioChangeHandeler_N_lichaam(event: any) {
    this.selectedItem_N_lichaam = event.target.value;
    this.check_volgende = true
    sessionStorage.setItem('q2', this.selectedItem_N_lichaam);
  }

  radioChangeHandeler_lichaam(event: any) {
    this.selectedItem_lichaam = event.target.value;
    this.check_volgende = true
    sessionStorage.setItem('q2', this.selectedItem_lichaam);
    // console.log(this.selectedItem_lichaam);
  }

  handleq1() {
    if (this.selectedItem_N_lichaam != ''|| this.selectedItem_lichaam != '') {
      this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'result']);
    }
  
  }

  handleTerug() {
    this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'q1'])
    sessionStorage.removeItem('q1d1');
    sessionStorage.removeItem('q1d2');
    sessionStorage.removeItem('q2');
  }

}
