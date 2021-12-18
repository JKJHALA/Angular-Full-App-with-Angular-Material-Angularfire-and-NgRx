import { createAction, props } from "@ngrx/store";
import { Product } from "../model/product";

export const loadAllProducts = createAction('[Products] Load');

export const allProductsLoaded = createAction('[Products Effect] Loaded',
props<{products:Product[]}>()
);

export const addProduct = createAction('[ProductsEntryPanel] Add',
props<{newProduct: Product}>()
);



