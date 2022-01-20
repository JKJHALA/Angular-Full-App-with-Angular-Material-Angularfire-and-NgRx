
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { AuthState } from 'src/app/auth/reducers';
import { selectedClient } from 'src/app/auth/state/auth.selectors';
import { ShipmentLTLState } from '../reducers'
import * as fromShipmentltl from '../reducers/index'


//create base state selector for module's entity
export const selectShipmentLTLsState =
  createFeatureSelector<ShipmentLTLState>("shipmentltl");

export const selectAuthState =
  createFeatureSelector<AuthState>("auth");

export const selectAllShipmentLTLs = createSelector(
  selectShipmentLTLsState, //state or selector
  fromShipmentltl.selectAll //projection function ...here just inbuilt
);

export const SelectedClient = createSelector(
  selectAuthState,
  SelectedClient => SelectedClient.selectedClient
);


  export const selectShipmentByClientID = (clientID:number=0) => createSelector(    
    selectAllShipmentLTLs,
    (shipments => shipments.filter(val => val.ClientId == clientID)) 
    //shipments => shipments    
);

export const selectShipmentByClientID = createSelector(
  selectShipmentLTLsState,
  SelectedClient,
  map((shipment,client):(BOLHDR[],ClientMasterMiniModel) => shipment.filter(a => a.ClientId == SelectedClient.ClientID))

    
    // of(fromShipmentltl.selectAll).
//       pipe
//       (
//         withLatestFrom(SelectedClient),
//         map((a,b) => { === b})
//       )      
 }
);
 

  //(shipments => shipments.filter(val => val.ClientId == clientID)) 
  //shipments => shipments    






