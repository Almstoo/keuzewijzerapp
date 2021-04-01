import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcauthService } from '../services/hcauth.service';
import { BasicauthService } from '../services/basicauth.service ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  errorMessage = 'Ongeldige gebruikersnaam of wachtwoord'
  invalidLogin = false


  constructor(
    private router: Router,
    private hcauthService: HcauthService,
    private basicauthService: BasicauthService
  ) { }

  ngOnInit() {
  }

  // handleLogin() {

  //   //if(this.username==="user" && this.password === 'user') {
  //   if (this.hcauthService.authenticate(this.username, this.password)) {
  //     //Redirect to Welcome Page
  //     //this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //     this.router.navigate(['welcome', this.username])
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  handleJWTAuthLogin() {
    this.basicauthService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

  handleBasicAuthLogin() {
    this.basicauthService.executeBasicAuthenticate(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }

}
