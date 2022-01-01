import { createAction, props } from "@ngrx/store";
import { BOLHDR } from "../model/BOLHDR";

export const loadAllShipmentsLTL = createAction('[ShipmentLTL component] Load',props<{ clientID: number }>());

export const allShipmentsLTLLoaded = createAction('[ShipmentLTL Effect] Loaded',
props<{bolhdrs:BOLHDR[]}>()
);



