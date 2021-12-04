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
import { AuthActions } from '../action-types';
import { UserProfile } from '../Model/userProfile';

export const authFeatureKey = 'auth';

export interface AuthState {
userProfile: UserProfile;
}

export const initialAuthState: AuthState={
  userProfile: {}
}


export const authReducer=createReducer(
  initialAuthState,
  on(AuthActions.login,(state,action)=>{
    return{userProfile: action.userProfile}
  })
)
// export const reducers: ActionReducerMap<State> = {

// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
