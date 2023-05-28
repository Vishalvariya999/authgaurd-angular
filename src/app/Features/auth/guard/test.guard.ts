import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
export interface Ideactive {
  canExit: () => boolean;
}
import { Observable } from 'rxjs';
import { Child1Component } from '../../service/child1/child1.component';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TestGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<unknown>,
    CanLoad,
    CanMatch
{
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    alert('Please first login');
    this.router.navigate(['']);
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (confirm('Press OK, If you are an admin?')) {
      return true;
    }
    return false;
  }
  canDeactivate(
    component: Child1Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit();
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let email = localStorage.getItem('email');
    let role = localStorage.getItem('role');
    if (role === 'admin' && email === 'admin@gmail.com') {
      return true;
    } else if (email === null) {
      alert('Please first login');
    } else {
      alert("you don't have any admin rights");
    }
    return false;
  }
}
