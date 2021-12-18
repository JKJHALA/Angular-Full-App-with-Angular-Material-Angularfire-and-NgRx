import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, noop } from "rxjs";
import { ProductService } from "../services/productService";
import { ProductActions } from "./action-types";
import { allProductsLoaded } from "./product.action";
import {Product} from "../model/product"


@Injectable()
export class ProductEffects{

constructor(
  private actions$:Actions,
  private productService:ProductService
){}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProductActions.loadAllProducts),
        concatMap((action)=>{this.productService.GetProductByClientID(1132)}),
        map((product)=>allProductsLoaded({product}))
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        );
  });

}
