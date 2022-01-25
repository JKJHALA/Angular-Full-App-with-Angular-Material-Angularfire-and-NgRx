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
import { compareProducts, Product } from '../Model/Product';
import { ProductActions } from '../state/action-types';

export const productFeatureKey = 'product';

export const adapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product.ProductID ? product.ProductID : 0,
  sortComparer: compareProducts
})

export interface ProductState extends EntityState<Product> {
  allProductsLoaded: boolean
}

export const inititalProductState = adapter.getInitialState(
  { allProductsLoaded: false }
)

export const productReducer = createReducer(
  inititalProductState,

  on(ProductActions.allProductsLoaded,
    (state, action) => adapter.addMany(
      action.products,
      { ...state, allProductsLoaded: true }
    )
  ),

  on(ProductActions.addedNewProdct,
    (state,action) => adapter.addOne(
      action.addedProduct,
      {...state, addProduct :true}
    )
  )
)
export const{ selectAll } = adapter.getSelectors();
