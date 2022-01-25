import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Product } from "../Model/Product";


@Injectable()
export class ProductService {
    // domainUrl: string = "https://devwtcustomer.tmssaas.com/";
    domainUrl: string = environment.baseEndpoint;

    constructor(private http: HttpClient) { }

    GetProductByClientID(clientID: number): Observable<Product[]> {
        const prodUrl = this.domainUrl + 'Services/Wcf/ProductService.svc/json/GetProductsByClient';

        let params = new HttpParams();
        params = params.set('ClientID', clientID.toString());
        const options = { params };
        return this.http.get<ProductResult>(prodUrl, options).pipe(
            map((res) => res['GetProductsByClientResult'])
        );
    }

    InsertProduct(newProduct: Product): Observable<Product> {
        const prodUrl = this.domainUrl + 'services/wcf/productservice.svc/json/InsertProduct';

        const contentHeaders = new HttpHeaders();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        let options = { headers: contentHeaders! };
        return this.http.post<Product>(prodUrl, newProduct, options)
            .pipe(
                tap(a => newProduct)
            );
    }
}



interface ProductResult {
    GetProductsByClientResult: [];
}

interface ProResbyId {
    GettProductsByProductIDResult: Product;
}