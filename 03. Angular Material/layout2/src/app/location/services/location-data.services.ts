

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  HttpMethods,
  HttpUrlGenerator,
  QueryParams,
} from '@ngrx/data';
import { Update } from '@ngrx/entity';

import { map, Observable, of } from 'rxjs';
import { Location } from '../model/location';

@Injectable()
export class LocationDataService extends DefaultDataService<Location> {
  domainUrl: string = 'https://devwtcustomer.tmssaas.com/';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Location', http, httpUrlGenerator);
  }

  override getAll(): Observable<Location[]> {


    //   https://devwtcustomer.tmssaas.com/Services/Wcf/LocationService.svc/json/GetLocationsByClient
    // const locUrl = this.domainUrl + 'Services/MasLocationService.svc/json/GetLocationByType';

    const locUrl =
      this.domainUrl +
      'Services/Wcf/LocationService.svc/json/GetPagedLocationForClient';

    let params = new HttpParams();
    params = params
      .set('clientID', '1132')
      .append('pageNo', 1)
      .append('recordCount', 10)
      .append('LocationTypeID', '3')
      .append('LocationName', 'abc');

    const options = { params };

    return this.http
      .get(locUrl, options)
      .pipe(map((res) => (res as locRes)['GetPagedLocationForClientResult']));
  }

  //just to demostrate any customer para /method can be used
  override getWithQuery(
    queryParams: QueryParams | string
  ): Observable<Location[]> {
    const locUrl =
      this.domainUrl +
      'Services/Wcf/LocationService.svc/json/GetPagedLocationForClient?' +
      queryParams;



    // const httpOptions = { params }; //can use sprade operator and append to existing options
    return this.http
      .get(locUrl) //can switch based on method name
      .pipe(map((res) => (res as locRes)['GetPagedLocationForClientResult']));
  }

  override update(location: Update<Location>) :Observable<Location>{



    const locUrl =
      this.domainUrl +
      'Services/Wcf/LocationService.svc/json/UpdateMAS_Location';

    this.http.post(locUrl, JSON.stringify(location)).subscribe();





   return of({...newLocation,...location.changes});

  }


}

//wrokaround to ignore ts error
interface locRes {
  GetPagedLocationForClientResult: [];
}
