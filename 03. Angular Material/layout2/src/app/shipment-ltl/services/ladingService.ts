import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BOLHDR } from '../model/BOLHDR'
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class LadingService {

    domainUrl: string = environment.baseEndpoint;
    // domainUrl: string = "http://localhost:1352/";
    constructor(private http: HttpClient) { }

    GetPagedBOLHDRsFromOpenStatusPublic(clientID: number): Observable<BOLHDR[]> {

        const prodUrl = this.domainUrl + 'Services/Wcf/LadingService.svc/json/GetPagedBOLHDRsFromOpenStatusPublic';

        let params = new HttpParams();
        params = params.set('ClientID', clientID.toString()).append('pageNo', 0).append('recordCount', 1000).append('lastLadingId', 0);
        const options = { params };
        return this.http.get<BOLHDRResult>(prodUrl, options).
        pipe(
            map
            (
                (res) => res['GetPagedBOLHDRsFromOpenStatusPublicResult']
            )
        );
    }

}

interface BOLHDRResult {
    GetPagedBOLHDRsFromOpenStatusPublicResult: [];
}