import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./reducers";


export const selectAuthState=
  createFeatureSelector<AuthState>(authFeatureKey)

  export const userTicket=createSelector(
    selectAuthState,
    (auth)=>auth.userProfile.Ticket

      );

    export const client=createSelector(
      selectAuthState,
      (auth)=>auth.userProfile.ClientID
    )

  export const isLoggedIn=createSelector(
    selectAuthState,
    (auth)=>!!auth.userProfile
  );

  export const isLoggedOut=createSelector(
    isLoggedIn,
    (loggedIn)=>!loggedIn
  )
