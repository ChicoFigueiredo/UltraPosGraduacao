import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: NbAuthToken;
  constructor(
    public auth: NbAuthService,
    public router: Router,
  ) {
    this.auth.onTokenChange().subscribe(tk => {
      this.token = tk;
    })
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>  {
    const tk = this.token ? this.token.getValue() : '';
    return next
        .handle(
          request.clone({
            setHeaders: { 'Authorization': 'Bearer ' + tk },
          }),
        ).pipe(catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 403:
                this.auth.logout('email');
                this.router.navigateByUrl('/auth/login');
                return error;
          }
        } else {
            return error;
          }
      }));
  }
}
