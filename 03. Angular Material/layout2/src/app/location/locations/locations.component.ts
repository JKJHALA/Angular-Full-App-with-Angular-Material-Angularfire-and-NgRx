import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { LocationEntityService } from '../services/location-entity.service';
import { Location } from '../model/location';
import { LocationAdeptor } from '../locationAdeptor';
import { selectOriginLocations } from '../location-selector';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationAdeptor],
})
export class LocationsComponent implements OnInit {
  locations$: Observable<Location[]> = of([]);

  filteredLocation$: Observable<Location[]> = of([]);

  displayedColumns: string[] = ['LocationId', 'Name'];

  currentPage: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationEntityService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //this.locationService.getLocationByPage
    this.locations$ = this.locationService.entities$;

    combineLatest([this.locationService.count$, this.currentPage]).subscribe(
      ([c, n]: any) => {
        //this will send another all when record is updated so do wroaround it is not good
        if (!(Number(c) > 0 && n === 1) && 10 * n > c + 1) {
          //don't subscribe on returning back or use router state
          //bulid query in seprate helper/utility class/service
          this.locationService.getWithQuery(
            `clientID=1132&pageNo=${n}&recordCount=10`
          );
        }
      }
    );

    //instead of hardcoded , get value from texbox
    //if count is less then say 10 we can trigger service call
    //also need to maintain falg if alreay searched for givent text .. so we don;t make infinite no of call
    //in some filter we may have 2-3 records only
    //this is for autocomplete filters
    this.filteredLocation$ = this.store.pipe(
      select(selectOriginLocations('XXX A'))
    );

  }

  addEditClick() {
    this.router.navigate(['/addEditlocation', '631565'], {
      relativeTo: this.route,
    });
    //this.locationService.getWithQuery('clientID=1132&pageNo=2&recordCount=10')
    // this.router.navigateByUrl('/addEditlocation');
  }

  openProducts() {
    this.router.navigate(['/product']);
  }

  AddLocationClick() {
    this.currentPage.next(this.currentPage.value + 1);
  }
}
