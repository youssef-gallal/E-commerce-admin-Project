import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../login/services/login-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = inject(LoginService).getToken();
  let authReq = req
  if (authToken != null) {
     authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  return next(authReq);

};
