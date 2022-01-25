import { Injectable, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ApplicationMenuModel } from "../auth/Model/ApplicationMenuModel";
import { BrandInfoModel } from "../auth/Model/BrandInfoModel";
import { ClientDefaultsModel } from "../auth/Model/ClientDefaultsModel";
import { ClientMasterMiniModel } from "../auth/Model/ClientMasterMiniModel";
import { UserProfile } from "../auth/Model/userProfile";
import { AuthState } from "../auth/reducers";
import {  applicationMenus, brandInfo, clientDefaults, clientID, corporateClientDefaults, isLoggedIn, LoggedClientID, loggeduserID, selectedClient, userName, userTicket } from "../auth/state/auth.selectors";
import { ClientMasterMiniState } from "../client/reducers";
import { filteredClients } from "../client/state/clientMasterMini.selector";

@Injectable()
export class ApplicationStateService {

    public userID$: Observable<number | undefined> = of();
    public username$: Observable<string | undefined> = of();
    public isLoggedIn$: Observable<boolean> = of();
    public userTicket$: Observable<string | undefined> = of();
    public clientID$: Observable<number | undefined> = of();
    public loggedClientID$ : Observable<number | undefined> = of();

    public selectedClient$: Observable<ClientMasterMiniModel> = of();
    public brandInfo$: Observable<BrandInfoModel[]> = of();
    public clientDefaults$: Observable<ClientDefaultsModel[]> = of();
    public corporateClientDefaults$: Observable<ClientDefaultsModel[]> = of();
    public filteredClientAndSubClient$: Observable<ClientMasterMiniModel[]> = of();
    public applicationMenus$: Observable<ApplicationMenuModel[]> = of();

    constructor(private store: Store<AuthState>,private clientMasterMiniStore:Store<ClientMasterMiniState>) {

        this.userID$ = this.store.pipe(select(loggeduserID));
        this.username$ = this.store.pipe(select(userName));
        this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
        this.userTicket$ = this.store.pipe(select(userTicket));
        this.clientID$ = this.store.pipe(select(clientID));
        this.loggedClientID$ = this.store.pipe(select(LoggedClientID));

        this.selectedClient$ = this.store
            .pipe(
                select(selectedClient)
            );

        this.brandInfo$ = this.store
            .pipe(
                select(brandInfo)
            );

        this.clientDefaults$ = this.store
            .pipe(
                select(clientDefaults)
            );

        this.corporateClientDefaults$ = this.store
            .pipe(
                select(corporateClientDefaults)
            );

        this.applicationMenus$ = this.store
            .pipe(
                select(applicationMenus)
            );


        this.filteredClientAndSubClient$ = this.clientMasterMiniStore
            .pipe(
                select(filteredClients)
            );
    }

}
