import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Location} from './model/location'


@Injectable()
export class LocationAdeptor{

  public currentLocation$: Observable<Location | undefined> | undefined;




}
