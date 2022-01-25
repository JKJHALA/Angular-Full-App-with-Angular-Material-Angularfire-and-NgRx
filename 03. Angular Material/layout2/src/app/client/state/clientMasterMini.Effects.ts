import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { ClientMasterMiniService } from "../services/clientMasterMini.service";
import { ClientMasterMiniActions } from "./action-types";
import { ClientAndSubClientByFilterStringLoaded } from "./clientMasterMini.action";

@Injectable()
export class clientMasterMiniEffects {
    store: any;

    constructor(
        private actions$: Actions,
        private clientMasterMiniService: ClientMasterMiniService
    ) {
    }

    loadClientAndSubClientByFilterName$ = createEffect(() => {        
        return this.actions$.pipe(
            ofType(ClientMasterMiniActions.LoadClientAndSubClientByFilterString),
            concatMap((action) => { return this.clientMasterMiniService.getClientAndSubClientByFilterString(action.filterClientName, action.clientID, action.userID) }),                
            map((filteredClients) => ClientAndSubClientByFilterStringLoaded({ filteredClients }))
        );
    });
}