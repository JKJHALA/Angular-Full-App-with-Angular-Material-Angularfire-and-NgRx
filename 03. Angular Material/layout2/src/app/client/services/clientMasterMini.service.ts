import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { ClientMasterMiniModel } from "../model/ClientMasterMiniModel";

@Injectable()
export class ClientMasterMiniService {
  //domainUrl: string = "https://devcustomer.tmssaas.com/";  
  domainUrl: string = environment.baseEndpoint;
  constructor(private http: HttpClient) { }

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
}