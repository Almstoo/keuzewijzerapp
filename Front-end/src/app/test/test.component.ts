import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  selectedAge: String =''
ages : any =[
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


  constructor() { }

  ngOnInit() {
  }
radioChangeHandeler(event:any){
    this.selectedAge = event.target.value;
  }
}
