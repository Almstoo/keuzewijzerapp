import { Component, OnInit } from '@angular/core';
import { HcauthService } from '../services/hcauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user:String = sessionStorage.getItem('authUser');

  navTools: String = `users/${this.user}/tools`
  constructor(
    private hcauthService: HcauthService
  ) { }

  ngOnInit() {
  }

 
  
}
