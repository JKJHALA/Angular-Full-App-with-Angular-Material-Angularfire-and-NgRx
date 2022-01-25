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
import { compareClients } from '../model/ClientMasterMiniModel';
import { ClientMasterMiniModel } from '../model/ClientMasterMiniModel';
import { ClientMasterMiniActions } from '../state/action-types';



export const clientMasterMiniFeatureKey = 'clientMasterMini';

export interface ClientMasterMiniState extends EntityState<ClientMasterMiniModel>{
  isClientMasterMiniLoaded: boolean
  }

  export const adapter=createEntityAdapter<ClientMasterMiniModel>({
    selectId: (clients:ClientMasterMiniModel)=>clients.ClientID?clients.ClientID:0,
    sortComparer: compareClients
   })

   export const inititalClientMasterMiniState=adapter.getInitialState(
    {isClientMasterMiniLoaded:false}
  )

  export const ClientMasterMiniReducer= createReducer(
    inititalClientMasterMiniState,
    on(ClientMasterMiniActions.ClientAndSubClientByFilterStringLoaded,
      (state,action)=>adapter.addMany(
        action.filteredClients,
        {...state,allShipmentsLTLLoaded:true}
      )
  
      ) 
  );



  export const{
    selectAll
  } =adapter.getSelectors();




