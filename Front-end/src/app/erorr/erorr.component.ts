import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erorr',
  templateUrl: './erorr.component.html',
  styleUrls: ['./erorr.component.css']
})
export class ErorrComponent implements OnInit {

  errorMessage = 'An Error Occured! Contact Support at *** - ***'
  constructor() { }

  ngOnInit() {
  }

}
