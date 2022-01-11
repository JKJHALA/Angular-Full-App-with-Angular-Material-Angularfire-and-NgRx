import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter } from "src/app/shipment-ltl/reducers";
import { authFeatureKey, AuthState } from "../reducers";


export const selectAuthState =
  createFeatureSelector<AuthState>(authFeatureKey)

export const userTicket = createSelector(
  selectAuthState,
  (auth) => auth.userProfile.Ticket

);

export const LoggedClientID = createSelector(
  selectAuthState,
  (auth) => auth.userProfile.ClientID
);

export const clientID = createSelector(
  selectAuthState,
  (auth) => auth.selectedClient.ClientID
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.userProfile.UserName  
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (loggedIn) => !loggedIn
);

export const userName = createSelector(
  selectAuthState,
  (auth) => auth.userProfile.UserName
);

export const loggeduserID = createSelector(
  selectAuthState,
  (auth) => auth.userProfile.UserID
);

export const selectedClient=createSelector(
  selectAuthState,
  (auth) => auth.selectedClient
);

export const brandInfo=createSelector(
  selectAuthState,
  (auth) => auth.BrandInfo
);

export const clientDefaults=createSelector(
  selectAuthState,
  (auth) => auth.ClientDefaults
);

export const corporateClientDefaults=createSelector(
  selectAuthState,
  (auth) => auth.CorporateClientDefaults
);

export const filteredClients = createSelector(
  selectAuthState,
  (auth)=>auth.clientAndSubclients
);

export const applicationMenus=createSelector(
  selectAuthState,  
  (auth) => auth.applicationMenus
);

