import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
// import { environment } from '../../environments/environment';

import { environment } from '../../../environments/environment';
import { compareProducts, Product } from '../model/product';
import { ProductActions } from '../state/action-types';
export const productFeatureKey = 'product';

//defind interface
export interface ProductState extends EntityState<Product>{
allProductsLoaded: boolean
}

//create entity adeptor give primary key and sort function
export const adapter=createEntityAdapter<Product>({
 selectId: (product:Product)=>product.ProductID?product.ProductID:0,
 sortComparer: compareProducts
})

//set some initital state to use in reducer
export const inititalProductState=adapter.getInitialState(
  {allProductsLoaded:false}
)

export const productReducer= createReducer(

  inititalProductState,

  on(ProductActions.allProductsLoaded,
    (state,action)=>adapter.addMany(
      action.products,
      {...state,allProductsLoaded:true}
    )

    )


);


//export const reducers: ActionReducerMap<State> = {

//};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
