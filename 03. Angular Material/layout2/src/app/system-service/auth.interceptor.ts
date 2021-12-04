import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { AuthenticationService } from '../api-proxy/authentication/authentication.service';
import { delay, tap } from 'rxjs/operators';
import { AuthenticationService } from 'app/auth/auth.service';
import { userTicket } from 'app/auth/auth.selectors';
import { select, Store } from '@ngrx/store';
import { AuthState } from 'app/auth/reducers';
import { AppState } from 'app/reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //private loggedInUser:MASUserDto;
  //authTicket = null;
  private isTokenRefresh: boolean
  constructor(private authSrv: AuthenticationService, private store: Store<AppState>) {
    this.isTokenRefresh = false;

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    //this.refreshToken();
    let Newrequest = request;
    let Newrequest2=request;
   let ticket="no ticket";

 this.store.pipe(
      select(userTicket)
          ).subscribe(t=>{ if(!!t) ticket=t})


    if (!request.url.includes('DoLogin')) {
      const newHeaders = request.headers.set('Ticket', ticket);
      Newrequest = request.clone({ headers:  newHeaders });

    }

    return next.handle(Newrequest);
  }

  // private refreshToken(){

  //   if(this.sysStateSrv.authToken){

  //     delay(2000); //hold for 2 second

  //     const tokenIssueDate=new Date(this.sysStateSrv.authToken.TokenIssueDate);
  //     const tokenExpDate= new Date(this.sysStateSrv.authToken.TokenExpiryDate);

  //    //console.log(tokenIssueDate);
  //    //console.log(tokenExpDate)

  //     let currentDate=new Date();
  //     currentDate=new Date(currentDate.getTime()+(currentDate.getTimezoneOffset()*60000));
  //     //console.log(tokenIssueDate," token issue date");
  //     //console.log(tokenExpDate," token expirtydate date");
  //     //console.log(currentDate," current date");
  //     const tokenExpDiff=(tokenExpDate.getTime()-tokenIssueDate.getTime());
  //     const issueExpMinites= Math.floor((tokenExpDiff)/(1000*60));

  //     const currentExpDiff=(tokenExpDate.getTime()-currentDate.getTime());
  //     const currentExpMinites=Math.floor((currentExpDiff)/(1000*60));

  //     const expiryPercent=(currentExpMinites*100)/issueExpMinites;

  //     if(expiryPercent>0&&expiryPercent<40 && !this.isTokenRefresh){
  //       this.isTokenRefresh=true;
  //       this.authSrv.refreshToken().subscribe(
  //         (tokenData)=>{
  //           this.sysStateSrv.authToken=tokenData;
  //           console.log('token retrived');
  //           this.isTokenRefresh=false;
  //         }
  //       )
  //     }
  //   }
  // }
}
