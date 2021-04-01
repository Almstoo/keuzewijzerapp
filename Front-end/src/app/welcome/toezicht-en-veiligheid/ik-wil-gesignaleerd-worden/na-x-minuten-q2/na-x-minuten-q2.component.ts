import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { text_value } from 'src/app/interfaces/tool';

@Component({
  selector: 'app-na-x-minuten-q2',
  templateUrl: './na-x-minuten-q2.component.html',
  styleUrls: ['./na-x-minuten-q2.component.css']
})
export class NaXMinutenQ2Component implements OnInit {


  items_Na_X_Nee: text_value[] = [
    {
      text: 'Als cliënt na een x-tal minuten (een plek) niet uit is gegaan',
      value: 'plek_niet_uit'
    },
    {
      text: 'Als ik mijn zuurstofgehalte x tijd < dan x waarde is.',
      value: 'zuurstofgehalte'
    },
    {
      text: 'Als ik epileptische activiteit heb waarbij minder/geen sprake is van schudbewegingen of geluid',
      value: 'minder_epileptische'
    }
  ]

  items_Na_X_Ja_Or_Ja: text_value[] = [
    {
      text: 'ِAls hij zijn kamer na toiletgang niet kunnen vinden.',
      value: 'kamer_niet_vinden'
    },
    {
      text: 'ِAls hij toiletgang niet kunnen vinden.',
      value: 'toiletgang_niet_vinden'
    }
    
  ]

  items_Na_X_Ja_Or_Nee: text_value[] = [
    {
      text: 'Als cliënt zijn medicatie niet innemet',
      value: 'medicatie_niet_innemet'
    },
    {
      text: 'Als hij vergat de slaapkamerdeur te sluiten',
      value: 'slaapkamerdeur'
    }
    
  ]

  name = ''
  type = ''
  q1d1: String = ""
  q1d2: String = ""
  q1d3: String = ""
  
  selectedItem_Na_X_Nee = ''
  selectedItem_Na_X_Ja_Or_Ja= ''
  selectedItem_Na_X_Ja_Or_Nee= ''

  check_Na_X_Nee = false
  check_Na_X_Ja_Or_Ja = false
  check_Na_X_Ja_Or_Nee = false
  check_volgende = false

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
    this.q1d3 = sessionStorage.getItem('q1d3');

    if (this.q1d1 == 'naXminuten' && this.q1d2 == 'nee') {
      this.check_Na_X_Nee = true
      this.check_Na_X_Ja_Or_Ja = false
      this.check_Na_X_Ja_Or_Nee = false
    }
    else if (this.q1d1 == 'naXminuten' && this.q1d2 == 'ja' && this.q1d3 == 'ja') {
      this.check_Na_X_Nee = false
      this.check_Na_X_Ja_Or_Ja = true
      this.check_Na_X_Ja_Or_Nee = false
    }
    else if (this.q1d1 == 'naXminuten' && this.q1d2 == 'ja' && this.q1d3 == 'nee') {
      this.check_Na_X_Nee = false
      this.check_Na_X_Ja_Or_Ja = false
      this.check_Na_X_Ja_Or_Nee = true
    }
  }
  radioChangeHandeler_Na_X_Nee(event: any) {
    this.selectedItem_Na_X_Nee = event.target.value;
    this.check_volgende = true
    sessionStorage.setItem('q2', this.selectedItem_Na_X_Nee);
  }

  radioChangeHandeler_Na_X_Ja_Or_Ja(event: any) {
    this.selectedItem_Na_X_Ja_Or_Ja = event.target.value;
    this.check_volgende = true
    sessionStorage.setItem('q2', this.selectedItem_Na_X_Ja_Or_Ja);
    // console.log(this.selectedItem_lichaam);
  }
  radioChangeHandeler_Na_X_Ja_Or_Nee(event: any) {
    this.selectedItem_Na_X_Ja_Or_Nee = event.target.value;
    this.check_volgende = true
    sessionStorage.setItem('q2', this.selectedItem_Na_X_Ja_Or_Nee);
    // console.log(this.selectedItem_lichaam);
  }

  handleq1() {
     
      this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'result']);
    

  }

  handleTerug() {
    this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'q1'])
    sessionStorage.removeItem('q1d1');
    sessionStorage.removeItem('q1d2');
    sessionStorage.removeItem('q1d3');
    sessionStorage.removeItem('q2');
  }



}
