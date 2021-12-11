import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {Location} from './model/location'


@Injectable()
export class LocationAdeptor{

  public currentLocation$: Observable<Location | undefined> | undefined;

  private editedLocation : Location| undefined;

public get location():Location | undefined{
  return this.editedLocation;
}

 public set location(l:Location|undefined)
 {

   //if needed do some validation
   this.editedLocation=l;
  console.log(this.editedLocation)
 }


}
