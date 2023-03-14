import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let document: String = (localStorage.getItem('document') !== null) ? atob(localStorage.getItem('document')!) : '';
    console.log(document);
    if(document === '' || document === null){
      this.router.navigate(['login']);
      localStorage.clear();
    }
    this.router.navigate(['entradas']);
    return true;
  }

}
