import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromClientMasterMini from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { clientMasterMiniEffects } from './state/clientMasterMini.Effects';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromClientMasterMini.clientMasterMiniFeatureKey, fromClientMasterMini.ClientMasterMiniReducer),
    EffectsModule.forFeature([clientMasterMiniEffects])    
  ]
})
export class clientModule { }
