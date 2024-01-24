import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as UserSelectors from './header/state/user/user.selectors';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(UserSelectors.selectIsCreated),
      map((isUserCreated) => {
        if (isUserCreated) {
          return true;
        } else {
         void this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
