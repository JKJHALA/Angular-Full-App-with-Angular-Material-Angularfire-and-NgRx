import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { authEffects } from './state/auth.Effects';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([authEffects])
  ]
})
export class AuthModule { }
