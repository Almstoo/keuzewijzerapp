import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HcauthService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'user' && password === 'user') {
      sessionStorage.setItem('authUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authUser')
  }

}
