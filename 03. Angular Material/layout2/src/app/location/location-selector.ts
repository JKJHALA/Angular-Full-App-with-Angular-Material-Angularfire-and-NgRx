import { createSelector } from '@ngrx/store';
import { EntityCollection } from '@ngrx/data';
import {Location} from './model/location'


export const selectLocations =
    (entities: EntityCollection<Location>) => entities.entities;

    export const selectLocationlById =
    (locationId: string)     => createSelector(
      selectLocations,
      entities => entities[locationId])
