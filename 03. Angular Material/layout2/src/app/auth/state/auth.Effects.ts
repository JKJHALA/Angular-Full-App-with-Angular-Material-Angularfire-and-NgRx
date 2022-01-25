import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select } from "@ngrx/store";
import { concatMap, map, Observable, of } from "rxjs";
import { AuthenticationService } from "../services/auth.service";
import { AuthActions } from "./action-types";
import { ApplicationMenuLoaded, BrandInfoLoaded, ClientDefaultLoaded, CorporateClientDefaultLoaded, LoggedClientDetailLoaded } from "./auth.actions";


@Injectable()
export class authEffects {

    store: any;

    constructor(
        private actions$: Actions,
        private authService: AuthenticationService
    ) {

    }

    loadSelectedClient$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LoadLoggedClientDetail),
            concatMap((action) => { return this.authService.getMasClientFromClientIDs(action.clientID) }),
            map((clientMasterMiniModel) => LoggedClientDetailLoaded({ clientMasterMiniModel }))
        );
    });

    loadBrandInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LoadBrandInfo),
            concatMap((action) => { return this.authService.getBrandInfo(action.clientID) }),
            map((brandInfoModel) => BrandInfoLoaded({ brandInfoModel }))
        );
    });

    loadClientDefaults$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LoadClientDefault),
            concatMap((action) => { return this.authService.getClientDefaults(action.clientID) }),
            map((clientDefaultsModel) => ClientDefaultLoaded({ clientDefaultsModel }))
        );
    });

    loadCorporateClientDefaults$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LoadCorporateClientDefault),
            concatMap((action) => { return this.authService.getCorporateClientDefaults(action.clientID) }),
            map((corporateClientDefaultsModel) => CorporateClientDefaultLoaded({ corporateClientDefaultsModel }))
        );
    });

    // loadClientAndSubClientByFilterName$ = createEffect(() => {
        
    //     return this.actions$.pipe(
    //         ofType(AuthActions.LoadClientAndSubClientByFilterString),
    //         concatMap((action) => { return this.authService.getClientAndSubClientByFilterString(action.filterClientName, action.clientID, action.userID) }),
            
    //         map((filteredClients) => ClientAndSubClientByFilterStringLoaded({ filteredClients }))
    //     );
    // });

    loadApplicationMenus$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(AuthActions.LoadApplicationMenu),
            concatMap((action) => { return this.authService.getApplicationMenus(action.userID,action.clientID ) }),            
            map((applicationMenus) => ApplicationMenuLoaded({ applicationMenus }))
        );
    });
}
