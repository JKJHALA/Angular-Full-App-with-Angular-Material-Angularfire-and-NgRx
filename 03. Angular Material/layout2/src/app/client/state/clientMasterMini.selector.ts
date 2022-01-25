import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createReducer,
    createSelector,
    MetaReducer,
    on
  } from '@ngrx/store';
import { clientMasterMiniFeatureKey, ClientMasterMiniState } from "../reducers";
import  * as fromClientMasterMini from '../reducers/index';


export const selectClientMasterMiniState =
  createFeatureSelector<ClientMasterMiniState>(clientMasterMiniFeatureKey)

  export const filteredClients = createSelector(
    selectClientMasterMiniState, //state or selector
    fromClientMasterMini.selectAll //projection function ...here just inbuilt
  );