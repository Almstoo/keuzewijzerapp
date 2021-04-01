import { Injectable } from '@angular/core';
import { HcauthService } from './hcauth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutegardService implements CanActivate {

  constructor(
    private hcauthService: HcauthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hcauthService.isUserLoggedIn()) // do not forget () for methods for example isUserLoggedIn()
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
