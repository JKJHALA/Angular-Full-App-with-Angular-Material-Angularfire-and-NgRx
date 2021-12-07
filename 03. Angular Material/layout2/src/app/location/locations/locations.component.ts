import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { LocationEntityService } from '../services/location-entity.service';
import {Location} from '../model/location'


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private router: Router,
    private locationService: LocationEntityService,
    private store: Store<AppState>) { }

    locations$:Observable<Location[]>=of([])

    displayedColumns: string[] = ['LocationId', 'Name'];

    currentPage:BehaviorSubject<number>=new BehaviorSubject(1)

  ngOnInit(): void {


    //bulid query in seprate helper/utility class/service

    //this.locationService.getLocationByPage
    this.locations$=this.locationService.entities$

    //save subccription and on deactivate unsubscribe
    this.currentPage.subscribe(n=>(
      this.locationService.getWithQuery(`clientID=1132&pageNo=${n}&recordCount=10`)
    )

    )

  }




  AddLocationClick() {
    this.currentPage.next(this.currentPage.value+1)
//this.locationService.getWithQuery('clientID=1132&pageNo=2&recordCount=10')
   // this.router.navigateByUrl('/addEditlocation');
  }
}
