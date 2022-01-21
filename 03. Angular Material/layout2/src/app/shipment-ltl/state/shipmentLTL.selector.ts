
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { AuthState } from 'src/app/auth/reducers';
import { selectedClient } from 'src/app/auth/state/auth.selectors';
import { BOLHDR } from '../model/BOLHDR';
import { ShipmentLTLState } from '../reducers'
import * as fromShipmentltl from '../reducers/index'


//create base state selector for module's entity
export const selectShipmentLTLsState = createFeatureSelector<ShipmentLTLState>("shipmentltl");

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAllShipmentLTLs = createSelector(
  selectShipmentLTLsState, //state or selector
  fromShipmentltl.selectAll //projection function ...here just inbuilt
);


export const SelectedClient = createSelector(
  selectAuthState,
  authState => authState.selectedClient
);


export const selectShipmentByClientID = createSelector(
  selectAllShipmentLTLs,
  SelectedClient,
 (shipments  ,client)=>{
   return shipments.filter((s:BOLHDR) => s.ClientId == client.ClientID);
 })
