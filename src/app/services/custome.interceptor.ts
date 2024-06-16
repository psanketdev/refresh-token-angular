import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from './user.service';

export const customeInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const _userService = inject(UserService);
  let localUserData: any = {};
  let localData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  if (localData != null) {
    localUserData = JSON.parse(localData);
  }
  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localUserData?.token || ''}`,
    },
  });

  return next(cloneReq).pipe(
    catchError((error: HttpErrorResponse) => {
      debugger;
      if (error.status === 401) {
        const isRefresh = confirm('Do you want to continue?');
        if (isRefresh) {
          _userService.$refreshToken.next(true);
        }
      }
      return throwError(error);
    })
  );
};
