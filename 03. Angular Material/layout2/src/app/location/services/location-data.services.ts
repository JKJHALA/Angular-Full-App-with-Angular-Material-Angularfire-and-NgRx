import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { client } from "app/auth/auth.selectors";
import { map, Observable } from "rxjs";
import { Location } from "../model/location";

@Injectable()
export class LocationDataService extends DefaultDataService<Location>{

  domainUrl: string = "https://devwtcustomer.tmssaas.com/";

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super("Location", http, httpUrlGenerator);
  }




    override getAll(): Observable<Location[]> {
   //   https://devwtcustomer.tmssaas.com/Services/Wcf/LocationService.svc/json/GetLocationsByClient
   // const locUrl = this.domainUrl + 'Services/MasLocationService.svc/json/GetLocationByType';

    const locUrl = this.domainUrl + 'Services/Wcf/LocationService.svc/json/GetLocationsByClient';


    let params = new HttpParams();
    params = params.set('clientID', "1132")
    .append('LocationTypeID', '3')
    .append('LocationName', "abc")

    const options = { params };

    return this.http.get(locUrl,options)
      .pipe(
        map(res => (res as locRes)["GetLocationsByClientResult"])
      )
  }

}


//wrokaround to ignore ts error
interface locRes {
  GetLocationsByClientResult: []
}
