import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationComponent } from '../location/locations/location.component';
import { LocationEntryPanelComponent } from './location-entry-panel/location-entry-panel.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { LocationDataService } from './services/location-data.services';
import { compareLocations } from './model/location';
import { LocationEntityService } from './services/location-entity.service';

const entityMetadata: EntityMetadataMap = {
  Location: {
    sortComparer: compareLocations,
    entityDispatcherOptions: {
      optimisticUpdate: false
    }
  },

}



@NgModule({
  declarations: [LocationComponent, LocationEntryPanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,

  ],
  providers:[
    LocationEntityService,
    LocationDataService
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
