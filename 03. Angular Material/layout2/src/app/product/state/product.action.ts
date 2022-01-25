import { createAction, props } from "@ngrx/store"
import { Product } from "../Model/Product";

export const loadAllProducts = createAction('[Product Componet] Load', props<{ clientID: number }>() );

export const allProductsLoaded = createAction(
    '[Product Effect] Loadad', props<{ products: Product[] }>()
);

export const addProduct = createAction('[ProductsEntryPanel] Add',
props< { newProduct: Product }>()
);

export const addedNewProdct = createAction('[ProductsEntryPanel] NewAdded'
, props< { addedProduct: Product }>());
