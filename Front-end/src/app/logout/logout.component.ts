import { Component, OnInit } from '@angular/core';
import { HcauthService } from '../services/hcauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hcauthService: HcauthService
  ) { }

  ngOnInit() {
    this.hcauthService.logout();
  }

}
