import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { BOLHDR, compareShipmentLTLs } from '../model/BOLHDR';
import { ShipmentLTLActions } from '../state/action-types';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const shipmentltlFeatureKey = 'shipmentltl';

export interface ShipmentLTLState extends EntityState<BOLHDR>{
  allShipmentLTLLoaded: boolean
  }

  export const adapter=createEntityAdapter<BOLHDR>({
    selectId: (bolhdrs:BOLHDR)=>bolhdrs.LadingID?bolhdrs.LadingID:0,
    sortComparer: compareShipmentLTLs
   })

   export const inititalShipmentLTLState=adapter.getInitialState(
    {allShipmentLTLLoaded:false}
  )

  export const ShipmentLTLReducer= createReducer(
    inititalShipmentLTLState,
  
    on(ShipmentLTLActions.allShipmentsLTLLoaded,
      (state,action)=>adapter.addMany(
        action.bolhdrs,
        {...state,allShipmentsLTLLoaded:true}
      )
  
      ) 
  
  );


  export const{
    selectAll
  } =adapter.getSelectors();
  

