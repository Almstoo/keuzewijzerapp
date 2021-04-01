import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicauthService } from '../basicauth.service ';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicauthService: BasicauthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){

    // let username = 'user'
    // let password = 'password'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicauthService.getAuthenticatedToken();
    let username = this.basicauthService.getAuthenticatedUser()

    // req = req.clone({
    //   setHeaders : {
    //       Authorization : basicAuthHeaderString
    //     }
    //   }) 
    if(basicAuthHeaderString && username) { 
      req = req.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }

    return next.handle(req);
  }
}
