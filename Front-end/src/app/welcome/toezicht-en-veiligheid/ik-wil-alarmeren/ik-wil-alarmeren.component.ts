import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { text_value } from 'src/app/interfaces/tool';

@Component({
  selector: 'app-ik-wil-alarmeren',
  templateUrl: './ik-wil-alarmeren.component.html',
  styleUrls: ['./ik-wil-alarmeren.component.css']
})
export class IkWilAlarmerenComponent implements OnInit {


  errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  check = false
  check2 = false
  check3 = false
  selectedItem = ''
  selectedItem2 = ''
  selectedItem3 = ''
  name = ''

  items: text_value[] = [
    {
      text: 'geven',
      value: 'geven'
    },
    {
      text: 'ontvangen',
      value: 'ontvangen'
    },

  ]

  items2: text_value[] = [
    {
      text: 'Als hij binnen de woning is.',
      value: 'binnen'
    },
    {
      text: 'Als hij buiten de woning is.',
      value: 'buiten'
    },

  ]
  items3: text_value[] = [
    {
      text: 'Als hij zijn afspraak vergeet.',
      value: 'afspraak'
    },
    {
      text: 'Als hij zijn medicatie vergeet.',
      value: 'medicatie'
    },

  ]
  // items = [
  //   'Kan client huiskamer, slaapkamer, toilet, etc. gebruiken',
  //   'Can client op een knop duwen?', 
  //   'Heeft de client nog een functionerende handmotoriek',
  //   'Can de client praten?',
  //   'Kan de client antwoord geven op een vraag?',
  //   'Is contact gevenst via audio?',
  //   'Is contact gevenst via beeld?',
  //   'Gebruik hulpmiddel op eigen kamer?',
  //   'Gebruik hulpmiddel binnen eigen woning',
  //   'Weten locatie binnen pand van alarmering'
  // ]

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
  }

  radioChangeHandeler(event: any) {
    this.selectedItem = event.target.value;
    if (this.selectedItem == "geven") {
      this.check= false;
      this.check2 = true;
      this.check3 = false;
      sessionStorage.setItem('filter1', this.selectedItem);
    }
    if (this.selectedItem == "ontvangen") {
      this.check= false;
      this.check3 = true;
      this.check2 = false;
      sessionStorage.setItem('filter1', this.selectedItem);
    }
    // sessionStorage.setItem('q1', this.selectedItem);
  }

  radioChangeHandeler2(event: any) {
    this.selectedItem2 = event.target.value;
    sessionStorage.setItem('filter2', this.selectedItem2);
    this.check= true;
    // if(this.selectedItem2=='binnen'){
    //   sessionStorage.setItem('filter2t', this.selectedItem2);
    //   this.check= true;
    // }
    // else{
    //   sessionStorage.setItem('filter2t', this.selectedItem2);
    //   this.check= true;
    // }
    //  console.log(sessionStorage.getItem('filter2'))
  }

  radioChangeHandeler3(event: any) {
    this.selectedItem3 = event.target.value;
    sessionStorage.setItem('filter2', this.selectedItem3);
    this.check= true;
    // if(this.selectedItem3=='afspraak'){
    //   sessionStorage.setItem('filter2t', this.selectedItem3);
    //   this.check= true;
    // }
    // else{
    //   sessionStorage.setItem('filter2t', this.selectedItem3);
    //   this.check= true;
    // }
    //console.log(sessionStorage.getItem('filter2'))
  }

  handleq1() {
    if (this.selectedItem != '' && (this.selectedItem2 != '' || this.selectedItem3 != '')) {
      this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilAlarmeren', 'result']);
    }
    else {
      this.check = true
    }
  }
  handleTerug() {
    this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid'])
    sessionStorage.removeItem('filter1');
    sessionStorage.removeItem('filter2');
  }

}
