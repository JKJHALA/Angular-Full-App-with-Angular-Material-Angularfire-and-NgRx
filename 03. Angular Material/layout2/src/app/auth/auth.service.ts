import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from 'app/app.module';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SaasToken } from './Model/ticket';
import { UserProfile } from './Model/userProfile';


@Injectable()
export class AuthenticationService {
  domainUrl:string="https://devwtcustomer.tmssaas.com/";
  constructor(private http: HttpClient) { }

  public doLogin(userName:string,password:string,userType:string):Observable<UserProfile>{
      const loginUrl = this.domainUrl+'Services/LoginService.svc/Json/DoLogin';
      const options = {'UserName':userName,'Password':password,'userType':userType };

      return this.http.post<UserProfile>(loginUrl, options,{observe: 'response'})
     .pipe(
       map((x:any)=>{
         let userProfile: UserProfile;
         console.log(x)
         userProfile={...x.body.DoLoginResult};
         userProfile.Ticket = x.headers.get('ticket');
         x.body.DoLoginResult;

         console.log(userProfile);
         return userProfile;
       }))


    //   /* tap(
    //      x=>x.headers.keys().map( (key) => console.log(`${key}: ${x.headers.get(key)}`))
    //    )*/
    //  );
  }

  public refreshToken():Observable<SaasToken>{
    const refreshTokenUrl = this.domainUrl+'Services/LoginService.svc/Json/RefreshToken';
    return this.http.post<SaasToken>(refreshTokenUrl,null);
  }
}
function providedIn(providedIn: any, UserModule: any) {
  throw new Error('Function not implemented.');
}

function root(providedIn: (providedIn: any, UserModule: any) => void, root: any) {
  throw new Error('Function not implemented.');
}

