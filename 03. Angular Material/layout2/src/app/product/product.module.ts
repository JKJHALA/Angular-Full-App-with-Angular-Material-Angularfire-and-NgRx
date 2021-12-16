import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/product.component';
import { ProductEntryPanelComponent } from './ProductsEntryPanel/product-entry-panel/product-entry-panel.component';


@NgModule({
  declarations: [ProductComponent, ProductEntryPanelComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
