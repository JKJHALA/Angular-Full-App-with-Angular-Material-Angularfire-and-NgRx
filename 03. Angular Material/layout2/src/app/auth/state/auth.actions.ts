import { createAction, props } from "@ngrx/store";
import { ApplicationMenuModel } from "../Model/ApplicationMenuModel";
import { BrandInfoModel } from "../Model/BrandInfoModel";
import { ClientDefaultsModel } from "../Model/ClientDefaultsModel";
import { ClientMasterMiniModel } from "../Model/ClientMasterMiniModel";

import { UserProfile } from "../Model/userProfile";

export const login = createAction(
  "[Login Form] login",
  props<{ userProfile: UserProfile }>()
);

export const logout = createAction(
  "[Top Menu] Logout",
);


//Logged Client Detail
export const LoadLoggedClientDetail = createAction('[Login Form] ClientDetail Load', props<{ clientID: number }>());

export const LoggedClientDetailLoaded = createAction(
  "[auth Effects] ClientDetail Loaded",
  props<{ clientMasterMiniModel: ClientMasterMiniModel }>()
);


//Load Brand info
export const LoadBrandInfo = createAction('[Login Form] Brand Info Load', props<{ clientID: number }>());

export const BrandInfoLoaded = createAction(
  "[auth Effects] Brand Info Loaded",
  props<{ brandInfoModel: BrandInfoModel[] }>()
);


//Load Client Defaults
export const LoadClientDefault = createAction('[Login Form] Client Default Load', props<{ clientID: number }>());

export const ClientDefaultLoaded = createAction(
  "[auth Effects] Client Default Loaded",
  props<{ clientDefaultsModel: ClientDefaultsModel[] }>()
);


//Load Corporate Client Defaults
export const LoadCorporateClientDefault = createAction('[Login Form] Corporate Client Default Load', props<{ clientID: number }>());

export const CorporateClientDefaultLoaded = createAction(
  "[auth Effects] Corporate Client Default Loaded",
  props<{ corporateClientDefaultsModel: ClientDefaultsModel[] }>()
);

//Load Application Menus
export const LoadApplicationMenu = createAction('[Sidebar Component] Application Menu Load', 
props<{userID:number,clientID:number}>());

export const ApplicationMenuLoaded = createAction('[Sidebar Component] Application Menu Loaded',
props<{ applicationMenus:ApplicationMenuModel[]}>()
);

//Load Clients by Filter String
// export const LoadClientAndSubClientByFilterString = createAction('[Sidebar Component] Filtered Client Load', 
// props<{filterClientName:string,clientID:number,userID:number}>());

// export const ClientAndSubClientByFilterStringLoaded = createAction('[Sidebar Component] Filtered Client Loaded',
// props<{ filteredClients:ClientMasterMiniModel[]}>()
// );