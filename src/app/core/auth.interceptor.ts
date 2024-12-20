import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../login/services/login-service.service';
import { catchError, finalize, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService)
  const authToken = inject(LoginService).getToken();
  
  let authReq = req
  if (authToken != null) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  loginService.loadingOn();
  return next(authReq).pipe(
    catchError((error) => {
      loginService.loadingOff();

      // if (error.status === 401) {
      //   console.error('Unauthorized access - redirecting to login');
      // } else if (error.status === 404) {
      //   console.error('Resource not found');
      // }

      return throwError(() => error);
    }),
    finalize(() => {
      loginService.loadingOff();
    })
  );

};
