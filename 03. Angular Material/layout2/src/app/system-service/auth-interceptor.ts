import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AuthenticationService } from '../auth/services/auth.service';
import { userTicket } from '../auth/state/auth.selectors';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../auth/reducers';
//import { AppState } from '../reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isTokenRefresh: boolean
  constructor(private authSrv: AuthenticationService, private store: Store<AuthState>) {
    this.isTokenRefresh = false;

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let Newrequest = request;
    let Newrequest2 = request;
    let ticket = "no ticket";

    this.store.pipe(
      select(userTicket)
    ).subscribe(t => { if (!!t) ticket = t })

    if (ticket === "no ticket" && localStorage.getItem('ticket') != "") {
      const authTicket = localStorage.getItem('ticket')?.toString();
      ticket = authTicket != null ? authTicket : "";
    }

    if (!request.url.includes('DoLogin')) {
      const newHeaders = request.headers.set('Ticket', ticket);
      Newrequest = request.clone({ headers: newHeaders });

    }

    return next.handle(Newrequest);
  }

}
