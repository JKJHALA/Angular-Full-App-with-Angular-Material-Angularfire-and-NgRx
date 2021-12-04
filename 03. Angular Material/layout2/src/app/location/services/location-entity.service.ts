import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import {Location} from '../model/location'

@Injectable()
export class LocationEntityService
  extends EntityCollectionServiceBase<Location>{

    constructor(serviceElementsFactory:EntityCollectionServiceElementsFactory){
      super('Location',serviceElementsFactory);
    }


  }
