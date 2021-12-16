import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/product.component';
import { ProductEntryPanelComponent } from './ProductsEntryPanel/product-entry-panel/product-entry-panel.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './reducers';


@NgModule({
  declarations: [ProductComponent, ProductEntryPanelComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers)
  ]
})
export class ProductModule { }
