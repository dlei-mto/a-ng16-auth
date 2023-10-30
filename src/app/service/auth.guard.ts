import { AuthService } from '@aaa/service/auth.service';
import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard {
  // implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    if (user) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('authGuard#canActivate called');
  return inject(AuthGuard).canActivate(route, state);
  // OR no need AuthGuard class with guard function
  // const authService = inject(AuthService);
  // const router = inject(Router);
};
