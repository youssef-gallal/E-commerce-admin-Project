import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../login/services/login-service.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router: Router = inject(Router);
  const jwtToken = authService.getToken();
  if (!jwtToken) {
    console.log(jwtToken)
    router.navigate(['/login'], {
    }).then()
  }
  return true;
};

export const authorizedGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router: Router = inject(Router);
  if (authService.getToken()) {
    router.navigate(['/main_category'], {
    }).then()
  }
  return true;
};