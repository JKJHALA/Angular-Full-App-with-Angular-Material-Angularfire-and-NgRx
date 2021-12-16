


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
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

  override update(locationChange: Update<Location>) :Observable<Location>{



    const contentHeaders = new HttpHeaders();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
    let options = {headers: contentHeaders!};


    let location:Location ={ LocationId: locationChange.id as number ,
       ...locationChange.changes,

      }

      if ( locationChange.changes.ActivateDate instanceof Date)
      {
        location.ActivateDate=   `/Date(${locationChange.changes.ActivateDate!.getTime()})/`;

      }

      //hardcoded takeout
     // location.ActivateDate ='/Date(1640197800000/'
      location.PostalID=19232635
     location.CityId=120132
      location.StateId=0
      location.ClientId='1132'


    const locUrl =
      this.domainUrl +
      'Services/Wcf/LocationService.svc/json/UpdateLocation';

    this.http.post<Location>(locUrl, location, options).subscribe();

    const getUrl=
    this.domainUrl +
      'Services/Wcf/LocationService.svc/json/GetLocationByLocatinID?locationid='+ location.LocationId


      return this.http
      .get(getUrl) //can switch based on method name
      .pipe(map((res) => (res as locResbyId)['GetLocationByLocatinIDResult']))


  }


}

//wrokaround to ignore ts error
interface locResbyId {
  GetLocationByLocatinIDResult: Location;
}


//wrokaround to ignore ts error
interface locRes {
  GetPagedLocationForClientResult: [];
}
