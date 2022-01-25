import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './products/product.component';
import { ProductEntryPanelComponent } from './ProductEntryPanel/ProductEntryPanel.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ProductService } from './services/ProductService';
import { ProductContainerComponent } from './product-container/product-container.component';


@NgModule({
  declarations: [ProductComponent,ProductEntryPanelComponent, ProductContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers : [ProductService]
})
export class ProductModule { }
