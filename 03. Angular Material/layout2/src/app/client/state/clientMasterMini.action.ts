import { createAction, props } from "@ngrx/store";
import { ClientMasterMiniModel } from "../model/ClientMasterMiniModel";

//Load Clients by Filter String
export const LoadClientAndSubClientByFilterString = createAction('[Sidebar Component] Filtered Client Load', 
props<{filterClientName:string,clientID:number,userID:number}>());

export const ClientAndSubClientByFilterStringLoaded = createAction('[Sidebar Component] Filtered Client Loaded',
props<{ filteredClients:ClientMasterMiniModel[]}>()
);