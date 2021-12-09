import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { filter, first, map, Observable, of } from 'rxjs';
import { LocationEntityService } from '../services/location-entity.service';
import { Location } from '../model/location'
import { selectLocationlById } from '../location-selector';
import { LocationAdeptor } from '../locationAdeptor';




@Component({
  selector: 'app-location-container',
  templateUrl: './location-container.component.html',
  styleUrls: ['./location-container.component.css']
})
export class LocationContainerComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private locationService: LocationEntityService,
    private store: Store<AppState>,
    private locationAdeptor: LocationAdeptor) { }

  private locationId: string = ''
  //private currentLocation$: Observable<Location | undefined> | undefined;


  ngOnInit(): void {


    this.locationId = '631535';

    this.locationAdeptor.currentLocation$ =this.locationService.collection$.pipe(
      select(selectLocationlById(this.locationId)))



  }



}