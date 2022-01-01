
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ShipmentLTLState } from '../reducers'
import * as fromShipmentltl from '../reducers/index'


//create base state selector for module's entity
export const selectShipmentLTLsState=
  createFeatureSelector<ShipmentLTLState>("shipmentltl");

  export const selectAllShipmentLTLs=createSelector(
    selectShipmentLTLsState, //state or selector
    fromShipmentltl.selectAll //projection function ...here just inbuilt
  );

