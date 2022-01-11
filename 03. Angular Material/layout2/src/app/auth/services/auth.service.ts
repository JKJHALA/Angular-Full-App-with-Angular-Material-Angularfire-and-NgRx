import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AppModule } from 'app/app.module';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicationMenuModel } from '../Model/ApplicationMenuModel';
import { BrandInfoModel } from '../Model/BrandInfoModel';
import { ClientDefaultsModel } from '../Model/ClientDefaultsModel';
import { ClientMasterMiniModel } from '../Model/ClientMasterMiniModel';
import { SaasToken } from '../Model/ticket';
import { UserProfile } from '../Model/userProfile';
import { clientID, userName } from '../state/auth.selectors';


@Injectable()
export class AuthenticationService {
  domainUrl: string = "https://devwtcustomer.tmssaas.com/";
  constructor(private http: HttpClient) { }

  public doLogin(userName: string, password: string, userType: string): Observable<UserProfile> {
    const loginUrl = this.domainUrl + 'Services/LoginService.svc/Json/DoLogin';
    const options = { 'UserName': userName, 'Password': password, 'userType': userType };

    return this.http.post<UserProfile>(loginUrl, options, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let userProfile: UserProfile;
          //console.log(x)
          userProfile = { ...x.body.DoLoginResult };
          userProfile.Ticket = x.headers.get('ticket');
          x.body.DoLoginResult;

          const authTicket = userProfile.Ticket == undefined ? "" : userProfile.Ticket;
          localStorage.setItem('ticket', authTicket);

          //console.log(userProfile);
          return userProfile;
        }))


    //   /* tap(
    //      x=>x.headers.keys().map( (key) => console.log(`${key}: ${x.headers.get(key)}`))
    //    )*/
    //  );
  }

  public getMasClientFromClientIDs(clientID: number): Observable<ClientMasterMiniModel> {
    const loginUrl = this.domainUrl + '/Services/Wcf/ClientMasterService.svc/json/GetMAS_ClientFromClientIDs';
    const clientIDs = {"clientIDs" : [clientID]};

    return this.http.post<ClientMasterMiniModel>(loginUrl, clientIDs, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let clientMaster: ClientMasterMiniModel;

          clientMaster = { ...x.body.GetMAS_ClientFromClientIDsResult[0] };

          //x.body.GetMAS_ClientFromClientIDsResult;

          return clientMaster;
        }))
  }

  public getBrandInfo(clientID:number):Observable<BrandInfoModel[]>{
    const loginUrl = this.domainUrl + '/services/wcf/BrandInfoService.svc/json/GetBrandByClientid?clientID='+clientID;

    return this.http.get<BrandInfoModel[]>(loginUrl, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let brandInfo: BrandInfoModel[];

          brandInfo = { ...x.body.GetBrandByClientidResult };

          //x.body.GetMAS_ClientFromClientIDsResult;

          return brandInfo;
        }))
  }

  public getClientDefaults(clientID:number):Observable<ClientDefaultsModel[]>{
    const loginUrl = this.domainUrl + '/Services/Wcf/ClientMasterService.svc/json/GetClientDefaultForClientID?clientID='+clientID;

    return this.http.get<ClientDefaultsModel[]>(loginUrl, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let clientDefaults: ClientDefaultsModel[];

          clientDefaults = { ...x.body.GetClientDefaultForClientIDResult };

          //x.body.GetMAS_ClientFromClientIDsResult;

          return clientDefaults;
        }))
  }

  public getCorporateClientDefaults(clientID:number):Observable<ClientDefaultsModel[]>{
    const loginUrl = this.domainUrl + '/Services/Wcf/ClientMasterService.svc/json/GetCoporateClientDefault?clientID='+clientID;

    return this.http.get<ClientDefaultsModel[]>(loginUrl, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let corporateClientDefaults: ClientDefaultsModel[];

          corporateClientDefaults = { ...x.body.GetCoporateClientDefaultResult };

          //x.body.GetMAS_ClientFromClientIDsResult;

          return corporateClientDefaults;
        }))
  }

  public getClientAndSubClientByFilterString(filterClientName:string,clientID:number,userID:number):Observable<ClientMasterMiniModel[]>
  {
    const url = this.domainUrl + '/Services/Wcf/ClientMasterService.svc/json/GetClientAndSubClientByFilterString'
    const options = { 'filterClientName': filterClientName, 'clientID': clientID, 'userID': userID };

    return this.http.post<ClientMasterMiniModel[]>(url, options, { observe: 'response' })
    .pipe(
      map((x: any) => {
        let fliteredClientResult: ClientMasterMiniModel[];
        
        fliteredClientResult = x.body.GetClientAndSubClientByFilterStringResult ;
        
        return fliteredClientResult;
      }))
  }

  public getApplicationMenus(UserID : number,clientID:number):Observable<ApplicationMenuModel[]>
  {
    //const url = this.domainUrl + '/Services/Wcf/AuthenticateUserForPageService.svc/Json/GetGroupApplicationMenuByUserID?UserID='+ UserID +'&clientID=' + clientID
    const url = this.domainUrl + '/Services/Wcf/AuthenticateUserForPageService.svc/Json/GetApplicationMenuByUserIDAndClientID?userID='+ UserID +'&clientID=' + clientID

    return this.http.get<ApplicationMenuModel[]>(url, { observe: 'response' })
      .pipe(
        map((x: any) => {
          let applicationMenus: ApplicationMenuModel[];

          applicationMenus = x.body.GetApplicationMenuByUserIDAndClientIDResult;

          return applicationMenus;
        }))
  }

  public refreshToken(): Observable<SaasToken> {
    const refreshTokenUrl = this.domainUrl + 'Services/LoginService.svc/Json/RefreshToken';
    return this.http.post<SaasToken>(refreshTokenUrl, null);
  }
}

function providedIn(providedIn: any, UserModule: any) {
  throw new Error('Function not implemented.');
}

function root(providedIn: (providedIn: any, UserModule: any) => void, root: any) {
  throw new Error('Function not implemented.');
}

