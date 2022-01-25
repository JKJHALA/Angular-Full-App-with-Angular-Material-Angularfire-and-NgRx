import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../reducers";
import * as fromProducts from '../reducers/index'

export const selectProductsState = createFeatureSelector<ProductState>('product');

export const selectAllProducts=createSelector(
    selectProductsState,
    fromProducts.selectAll
);