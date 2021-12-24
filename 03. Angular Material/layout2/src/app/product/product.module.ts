import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../material.module'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './products/product.component';
import { ProductEntryPanelComponent } from './ProductEntryPanel/ProductEntryPanel.component';


@NgModule({
  declarations: [ProductComponent,ProductEntryPanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class ProductModule { }
