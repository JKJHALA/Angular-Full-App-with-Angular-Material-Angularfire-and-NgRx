import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  '../material.module'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationComponent} from '../location/locations/location.component';
import { LocationEntryPanelComponent } from './location-entry-panel/location-entry-panel.component';


@NgModule({
  declarations: [LocationComponent, LocationEntryPanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class LocationModule { }
