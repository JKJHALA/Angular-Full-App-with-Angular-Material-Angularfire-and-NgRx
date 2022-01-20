import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, filter, map, noop } from "rxjs";
import { LadingService } from "../services/ladingService";
import { ShipmentLTLActions } from "./action-types";
import { allShipmentsLTLLoaded, loadAllShipmentsLTL } from "./shipmentLTL.action";
import {BOLHDR} from "../model/BOLHDR"

@Injectable()
export class ShipmentLTLEffects{

    constructor(
        private actions$:Actions,
        private ladingService:LadingService
      ){}


      loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
           ofType(ShipmentLTLActions.loadAllShipmentsLTL),           
           concatMap((action)=>{return this.ladingService.GetPagedBOLHDRsFromOpenStatusPublic(action.clientID)}),
           map((bolhdrs)=>allShipmentsLTLLoaded({bolhdrs}))
           /** An EMPTY observable only emits completion. Replace with your own observable stream */
           );
     });

}