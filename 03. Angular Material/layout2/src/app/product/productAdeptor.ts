import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./Model/Product";



@Injectable()
export class ProductAdeptor {
    public currentProduct$: Observable<Product | undefined> | undefined;

    private editedProduct: Product | undefined;

    public get product(): Product | undefined {
        return this.editedProduct;
    }

    public set product(l: Product | undefined) {
        //if needed do some validation
        this.editedProduct = l;
    }
}