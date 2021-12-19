
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProductState } from '../reducers'
import * as fromProducts from '../reducers/index'


//create base state selector for module's entity
export const selectProductsState=
  createFeatureSelector<ProductState>("product");

  export const selectAllProducts=createSelector(
    selectProductsState, //state or selector
    fromProducts.selectAll //projection function ...here just inbuilt
  );

