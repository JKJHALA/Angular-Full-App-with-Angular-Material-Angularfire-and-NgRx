import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationsComponent } from './locations/locations.component';
import { LocationEntryPanelComponent } from './location-entry-panel/location-entry-panel.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { LocationDataService } from './services/location-data.services';
import { compareLocations } from './model/location';
import { LocationEntityService } from './services/location-entity.service';
import {Location} from './model/location';
import { LocationContainerComponent } from './location-container/location-container.component'

const entityMetadata: EntityMetadataMap = {
  Location: {
    sortComparer: compareLocations,
    selectId: (location:Location)=>location.LocationId?location.LocationId:0,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },

}



@NgModule({
  declarations: [LocationsComponent, LocationEntryPanelComponent, LocationContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers:[
    LocationEntityService,
    LocationDataService,
  ]
})
export class LocationModule {

  constructor(
    private edfs: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private locationDataService: LocationDataService
  ) {
    edfs.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Location', locationDataService)
  }

}
