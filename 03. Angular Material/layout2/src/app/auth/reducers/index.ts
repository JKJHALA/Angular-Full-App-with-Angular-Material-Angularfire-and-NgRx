import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
//import { environment } from '../../environments/environment';

import { environment } from '../../../environments/environment';
import { AuthActions } from '../state/action-types';
import { UserProfile } from '../Model/userProfile';
import { ClientMasterMiniModel, compareClients } from '../Model/ClientMasterMiniModel';
import { BrandInfoModel } from '../Model/BrandInfoModel';
import { ClientDefaultsModel } from '../Model/ClientDefaultsModel';
import { state } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';
import { adapter } from 'src/app/shipment-ltl/reducers';
import { ApplicationMenuModel } from '../Model/ApplicationMenuModel';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const authFeatureKey = 'auth';

export interface LoadFilteredClientsState extends EntityState<ClientMasterMiniModel>{
  isClientandSubClientLoaded: boolean

  }

export const LoadFilteredClientsadapter=createEntityAdapter<ClientMasterMiniModel>({
  selectId: (clients:ClientMasterMiniModel)=>clients.ClientID?clients.ClientID:0,
  sortComparer: compareClients
 })

 export const inititalLoadFilteredClientsState=adapter.getInitialState(
  {isClientandSubClientLoaded:false}
)

export interface AuthState {
  userProfile: UserProfile;
  isUserProfileLoaded: boolean;

  selectedClient: ClientMasterMiniModel;
  isSelectedClientLoaded: boolean;

  BrandInfo: BrandInfoModel[];
  isBrandInfoLoaded: boolean;

  ClientDefaults: ClientDefaultsModel[];
  isClientDefaultsLoaded: boolean;

  CorporateClientDefaults: ClientDefaultsModel[];
  IsCorporateDefaultsLoaded: boolean;

  clientAndSubclients:ClientMasterMiniModel[];
  isClientandSubClientLoaded:boolean;

  applicationMenus:ApplicationMenuModel[];
  isApplicationMenuLoaded:boolean;

}

export const initialAuthState: AuthState = {
  userProfile: {},
  isUserProfileLoaded: false,

  selectedClient: {},
  isSelectedClientLoaded: false,

  BrandInfo: [],
  isBrandInfoLoaded: false,

  ClientDefaults: [],
  isClientDefaultsLoaded: false,

  CorporateClientDefaults: [],
  IsCorporateDefaultsLoaded: false,

  clientAndSubclients:[],
  isClientandSubClientLoaded:false,

  applicationMenus:[],
  isApplicationMenuLoaded:false,
}


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return { ...state, userProfile: action.userProfile, isUserProfileLoaded: true }
  }),
  on(AuthActions.LoggedClientDetailLoaded, (state, action) => {
    return { ...state, selectedClient: action.clientMasterMiniModel, isSelectedClientLoaded: true }
  }),
  on(AuthActions.BrandInfoLoaded, (state, action) => {
    return { ...state, BrandInfo: action.brandInfoModel, isBrandInfoLoaded: true }
  }),
  on(AuthActions.ClientDefaultLoaded, (state, action) => {
    return { ...state, ClientDefaults: action.clientDefaultsModel, isClientDefaultsLoaded: true }
  }),
  on(AuthActions.CorporateClientDefaultLoaded, (state, action) => {
    return { ...state, CorporateClientDefaults: action.corporateClientDefaultsModel, IsCorporateDefaultsLoaded: true }
  }),
  // on(AuthActions.ClientAndSubClientByFilterStringLoaded,(state,action) => {    
  //   return{...state, clientAndSubclients : action.filteredClients ,isClientandSubClientLoaded:true}
  // }),
  on(AuthActions.ApplicationMenuLoaded,(state,action) => {    
    return{...state, applicationMenus : action.applicationMenus,isApplicationMenuLoaded:true}
  })
)

 
export const{
  selectAll
} =adapter.getSelectors();
