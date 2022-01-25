import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { ProductService } from "../services/ProductService";
import { ProductActions } from "./action-types";
import { addedNewProdct, allProductsLoaded } from "./product.action";


@Injectable()
export class ProductEffects {
    constructor(
        private action$: Actions,
        private productService: ProductService
    ) { }

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.loadAllProducts),
            concatMap((action) => { return this.productService.GetProductByClientID(action.clientID) }),
            map((products) => allProductsLoaded({ products }))
        );
    });

    addProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ProductActions.addProduct),
            concatMap((action) => { return this.productService.InsertProduct(action.newProduct) }),
            map((addedProduct) => addedNewProdct({ addedProduct }))
        );
    });

}