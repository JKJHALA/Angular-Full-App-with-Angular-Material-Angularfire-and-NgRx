import { createSelector } from '@ngrx/store';
import { EntityCollection } from '@ngrx/data';
import { Location } from './model/location';
import { EntitySelectorsFactory } from '@ngrx/data';

export const selectLocations = (entities: EntityCollection<Location>) =>
  entities.entities;

export const locationSelectors = new EntitySelectorsFactory().create<Location>(
  'Location'
);

export const selectLocationlById = (locationId: string) =>
  createSelector(selectLocations, (entities) => entities[locationId]);

export const selectOriginLocations = (matchString: string) =>
  createSelector(
    locationSelectors.selectEntities,

    (locations) => {
      return locations.filter((l) => {

        return l.LocationTypeID === 1 && l.Name?.startsWith(matchString);
      });
    }
  );




//l.LocationTypeId === 1 &&
