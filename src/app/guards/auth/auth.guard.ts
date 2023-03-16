import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let document: String = (localStorage.getItem('document') !== null) ? atob(localStorage.getItem('document')!) : '';
    if (document.length === 0) {
      this.router.navigate(['/login']);
      localStorage.clear();
      return false;
    }
    return true;
  }
}
