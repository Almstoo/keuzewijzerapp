import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { text_value } from 'src/app/interfaces/tool';

@Component({
  selector: 'app-ik-wil-gesignaleerd-worden',
  templateUrl: './ik-wil-gesignaleerd-worden.component.html',
  styleUrls: ['./ik-wil-gesignaleerd-worden.component.css']
})
export class IkWilGesignaleerdWordenComponent implements OnInit {

  // errorMessage = 'U heeft niks gekozen. Als u deze vraag niet wilt beantwoorden, ga naar Overslaan'
  check_volgende = false
  check_naXm = false
  check_naXm_vergeetachtigheid = false
  check_meteen = false
  selectedItem_meteen_naXm = ''
  selectedItem2 = ''
  selectedItem3 = ''
  selectedItem_meteen_ja_nee = ''

  name = ''

  items: text_value[] = [
    {
      text: 'Cliënt wil meteen gesignaleerd worden',
      value: 'meteen'
    },
    {
      text: 'Cliënt wil na X aantal minuten gesignaleerd worden',
      value: 'naXminuten'
    },
  ]

  items2: text_value[] = [
    {
      text: 'ja',
      value: 'ja'
    },
    {
      text: 'nee',
      value: 'nee'
    },
  ]

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedroute.snapshot.params['name']
  }
  radioChangeHandeler_meteen_naXm(event: any) {
    this.selectedItem_meteen_naXm = event.target.value;
    if (this.selectedItem_meteen_naXm == 'naXminuten') {
      this.check_naXm = true;
      this.check_volgende = false;
      this.check_meteen = false;
      sessionStorage.setItem('q1d1', 'naXminuten');
    }
    else {
      this.check_meteen = true;
      this.check_naXm = false;
      this.check_naXm_vergeetachtigheid = false;
      this.check_volgende = false;
      sessionStorage.setItem('q1d1', 'meteen');
    }

  }

  radioChangeHandeler_vergeetachtigheid(event: any) {
    this.selectedItem2 = event.target.value;
    if (this.selectedItem2 == 'ja') {
      this.check_naXm_vergeetachtigheid = true;
      this.check_volgende = false;
      sessionStorage.setItem('q1d2', 'ja');
    }
    else if (this.selectedItem2 == 'nee') {
      this.check_naXm_vergeetachtigheid = false;
      this.check_volgende = true;
      sessionStorage.setItem('q1d2', 'nee');
    }

  }
  radioChangeHandeler_orientatie(event: any) {
    this.selectedItem3 = event.target.value;
    if(this.selectedItem3=='ja'){
    this.check_volgende = true;
    sessionStorage.setItem('q1d3', 'ja');
    }
    else if (this.selectedItem3=='nee'){
      this.check_volgende = true;
      sessionStorage.setItem('q1d3', 'nee');
    }
  }

  radioChangeHandeler_meteen_ja_nee(event: any) {
    this.selectedItem_meteen_ja_nee = event.target.value;
    if (this.selectedItem_meteen_ja_nee=='ja'){
      sessionStorage.setItem('q1d2', 'ja');
    }
    else{
      sessionStorage.setItem('q1d2', 'nee');
    }
    this.check_volgende = true;
  }


  handleq1() {
    if (this.selectedItem_meteen_naXm == 'meteen') {
      this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'meteenQ2']);
    }

    else if (this.selectedItem_meteen_naXm == 'naXminuten') {
      this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid', 'IkWilGesignaleerdWorden', 'naXminutenQ2']);
    }
    

  }

  handleTerug() {
    this.router.navigate(['users', this.name, 'ToezichtEnVeiligheid'])
    // sessionStorage.removeItem('q4');
  }

}
