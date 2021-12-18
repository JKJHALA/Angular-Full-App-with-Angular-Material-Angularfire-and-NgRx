import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product'
// import { ProductPackageTypeDto } from './product-package-type-dto';
// import { ProductClassDto } from './product-class-dto';
// import {MASWeightUnitDto} from './masweight-unit-dto';

@Injectable()
export class ProductService {

  domainUrl:string="https://devwtcustomer.tmssaas.com/";//http://192.237.244.67:8090
  constructor(private http: HttpClient) { }

  GetProductByClientID(clientID: number): Observable<Product[]> {

    const prodUrl = this.domainUrl+'Services/Wcf/ProductService.svc/json/GetProductsByClient';

    let params = new HttpParams();
    params = params.set('ClientID', clientID.toString());
    const options = { params };
    return this.http.get<ProductResult>(prodUrl, options).pipe(
      map((res) => res['GetProductsByClientResult'])
    );
  }

  // GetProductPackageType(): Observable<ProductPackageTypeDto[]> {
  //   //const packageTypeUrl = 'https://devdb.tmssaas.com/Services/MasClientDefaultsService.svc/json/GetMasProductPackageType';
  //   const packageTypeUrl = this.domainUrl+'Services/MasClientDefaultsService.svc/json/GetMasProductPackageType';
  //   //const packageTypeUrl = 'https://beta.tmssaas.com/Services/MasClientDefaultsService.svc/json/GetMasProductPackageType';
  //   return this.http.get<ProductPackageTypeDto[]>(packageTypeUrl);
  // }

  // GetProductClasses(): ProductClassDto[] {

  //   const productClassList: ProductClassDto[] = [{ Classes: '50', EffectiveClass: '50' },
  //   { Classes: '55', EffectiveClass: '55' },
  //   { Classes: '60', EffectiveClass: '60' },
  //   { Classes: '65', EffectiveClass: '65' },
  //   { Classes: '70', EffectiveClass: '70' },
  //   { Classes: '77.5', EffectiveClass: '77' },
  //   { Classes: '85', EffectiveClass: '85' },
  //   { Classes: '92.5', EffectiveClass: '92' },
  //   { Classes: '100', EffectiveClass: '100' },
  //   { Classes: '110', EffectiveClass: '110' },
  //   { Classes: '125', EffectiveClass: '125' },
  //   { Classes: '150', EffectiveClass: '150' },
  //   { Classes: '175', EffectiveClass: '175' },
  //   { Classes: '200', EffectiveClass: '200' },
  //   { Classes: '250', EffectiveClass: '250' },
  //   { Classes: '300', EffectiveClass: '300' },
  //   { Classes: '400', EffectiveClass: '400' },
  //   { Classes: '500', EffectiveClass: '500' }];

  //   return productClassList;
  // }

  // GetEffectiveClassByNMFCAndPCF(pcf: number, nmfc: string, clientid: number, carrierid: string): Observable<number> {
  //   //const nmfClassUrl = 'https://devdb.tmssaas.com/Services/BOLHDRService.svc/json//GetEffectiveClassByNmfcAndPcf';
  //   const nmfClassUrl = this.domainUrl+'Services/BOLHDRService.svc/json//GetEffectiveClassByNmfcAndPcf';
  //   //const nmfClassUrl = 'https://beta.tmssaas.com/Services/BOLHDRService.svc/json//GetEffectiveClassByNmfcAndPcf';
  //   let params = new HttpParams();
  //   params = params.set('nmfcCode', nmfc ? nmfc : '')
  //     .append('pcf', pcf.toString())
  //     .append('clientID', clientid.toString())
  //     .append('carrierID', carrierid ? carrierid : '');
  //   const options = { params };
  //   return this.http.get<number>(nmfClassUrl, options);
  // }

  // GetWeightUnit():Observable<MASWeightUnitDto[]>{
  //   //const weightUnitUrl = 'https://devdb.tmssaas.com/Services/RatingProfileService.svc/json/GetWeightUnits';
  //   const weightUnitUrl = this.domainUrl+'Services/RatingProfileService.svc/json/GetWeightUnits';
  //   //const nmfClassUrl = 'https://beta.tmssaas.com/Services/BOLHDRService.svc/json//GetEffectiveClassByNmfcAndPcf';

  //   return this.http.get<MASWeightUnitDto[]>(weightUnitUrl);
  // }

}

//wrokaround to ignore ts error
interface ProductResult {
  GetProductsByClientResult: [];
}
