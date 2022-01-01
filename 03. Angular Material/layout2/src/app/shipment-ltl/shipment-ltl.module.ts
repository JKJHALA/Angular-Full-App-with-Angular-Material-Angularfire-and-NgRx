import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingBoardComponent } from '../shipment-ltl/lading-board/lading-board.component';
import { StoreModule } from '@ngrx/store';
import * as fromShipmentltl from './reducers';
import { LadingService } from './services/ladingService';
import { MaterialModule } from '../material.module';
import { EffectsModule } from '@ngrx/effects';
import { ShipmentLTLEffects } from './state/shipmentLTL.effects';


@NgModule({
  declarations: [
    LadingBoardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fromShipmentltl.shipmentltlFeatureKey, fromShipmentltl.ShipmentLTLReducer),
    EffectsModule.forFeature([ShipmentLTLEffects])
  ],
  providers:[LadingService]
})
export class ShipmentLTLModule { }
