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
import { ClientMasterMiniModel } from '../Model/ClientMasterMiniModel';
import { BrandInfoModel } from '../Model/BrandInfoModel';
import { ClientDefaultsModel } from '../Model/ClientDefaultsModel';
import { state } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';
import { adapter } from 'src/app/shipment-ltl/reducers';

export const authFeatureKey = 'auth';

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
  on(AuthActions.ClientAndSubClientByFilterStringLoaded,(state,action) => {
    return{...state, clientAndSubclients : action.filteredClients,isClientandSubClientLoaded:true}
  }),
)

export const{
  selectAll
} =adapter.getSelectors();
