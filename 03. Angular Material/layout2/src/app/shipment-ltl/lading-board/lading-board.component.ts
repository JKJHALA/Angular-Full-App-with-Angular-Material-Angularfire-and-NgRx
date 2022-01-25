import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, of, pairwise, pipe, tap, withLatestFrom } from 'rxjs';
import { BOLHDR } from '../model/BOLHDR';
import { ShipmentLTLState } from '../reducers';
import { loadAllShipmentsLTL } from '../state/shipmentLTL.action';
import { selectAllShipmentLTLs, selectShipmentByClientID } from '../state/shipmentLTL.selector';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ApplicationStateService } from 'src/app/shared/applicationStateService';
import { SubSink } from 'subsink/dist/subsink';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-lading-board',
  templateUrl: './lading-board.component.html',
  styleUrls: ['./lading-board.component.css']
})
export class LadingBoardComponent implements OnInit, OnDestroy {

  private subSink = new SubSink();

  public ShipmentLTLs$: Observable<BOLHDR[]> = of([]);

  displayedColumns: string[] = ['Edit', 'ClientLadingNo', 'ProNumber', 'Carrier', 'PickupDate', 'Shipper', 'Consignee', 'Status'];
  ShipmentLTLs = new MatTableDataSource<BOLHDR>();
  @ViewChild(MatPaginator) shipmentLTLpaginator: MatPaginator | any;
  @ViewChild(MatSort) shipmentLTLsort: MatSort | any;
  Selection = new SelectionModel<BOLHDR>(false, []);
  changedClientID: number = 0;
  @ViewChild('searchModal') sidenav: MatSidenav | any;

  constructor(private store: Store<ShipmentLTLState>,
    private router: Router,
    private route: ActivatedRoute,
    private applicationStateService: ApplicationStateService) {

  }


  ngAfterViewInit() {
    this.ShipmentLTLs.paginator = this.shipmentLTLpaginator;
    this.ShipmentLTLs.sort = this.shipmentLTLsort;
  }

  ngOnInit(): void {

    //     this.subSink.add(combineLatest([
    //       this.applicationStateService.clientID$,
    //       this.ShipmentLTLs$.pipe(pairwise),
    //     ]).pipe(
    //       map((o) => {
    //         return {a:o[0]};
    //       }),
    //       tap((o) => {
    // if(o[0] != 0[1])
    // {

    // }
    //       })
    //     )
    //     );

    this.subSink.add(this.applicationStateService.clientID$.subscribe(cli => {
      if (cli !== undefined && cli !== 0) {
        this.changedClientID = cli;

        this.ShipmentLTLs$ = this.store.pipe(
          select(selectAllShipmentLTLs)
        )
          .pipe(map(a => { return a.filter(val => val.ClientId === cli) }))


        this.ShipmentLTLs$.subscribe(bol => {
          if (bol.length == 0) {
            this.store.dispatch(loadAllShipmentsLTL({ clientID: cli }))
          }
        })
          .unsubscribe();

      }
    })
    );



    // combineLatest([this.applicationStateService.clientID$, this.ShipmentLTLs$]).subscribe(a => this.changedClientID == a[0]);

    // this.ShipmentLTLs$.subscribe(bol => {
    //   debugger
    //   if (bol.length === 0 && this.changedClientID !== 0) {
    //     this.store.dispatch(loadAllShipmentsLTL({ clientID: this.changedClientID === undefined ? 0 : this.changedClientID }))
    //   }
    // });



    // this.ShipmentLTLs$ = this.store.pipe(
    //   select(selectAllShipmentLTLs) 
    // )
    // .pipe(withLatestFrom(this.applicationStateService.clientID$),
    //  map(([a,b]) => {return a.filter(val => val.ClientId === b)}))


    this.ShipmentLTLs$ = this.store.pipe(
      select(selectShipmentByClientID)
    )



    this.ShipmentLTLs$.subscribe(a => {
      this.ShipmentLTLs.data = a;
      this.ShipmentLTLs.paginator = this.shipmentLTLpaginator;
      this.ShipmentLTLs.sort = this.shipmentLTLsort;
    })



  }


  ConverteJsonDateToLocalTimeZone(JsonDate: string) {
    if (JsonDate !== null && JsonDate !== undefined && JsonDate !== '') {
      let d = new Date();
      let ShipDate;
      let offset = d.getTimezoneOffset();

      let JsonDateDate;
      if (JsonDate.toString().indexOf('Date(') === -1) {
        JsonDateDate = new Date(JsonDate);
        JsonDateDate = JsonDateDate.getTime();

        JsonDateDate = parseInt(offset.toString()) * 60000 * (-1) + parseInt(JsonDate);

        JsonDateDate = '\/Date(' + JsonDate.toString() + ')\/';
      }

      if (JsonDate.toString().indexOf('-') !== -1) {

        let timeoffsetfromservicedate = JsonDate.toString().substring(JsonDate.toString().indexOf('-') + 1, JsonDate.toString().indexOf(')/'));

        let leftOffSetHour = parseInt(timeoffsetfromservicedate.toString().substring(0, 2)) * 60;
        let offsethour = parseInt(leftOffSetHour.toString()) + parseInt(timeoffsetfromservicedate.toString().substring(2, 4));

        let totalmillsecond = parseInt(offset.toString()) * 60000 + parseInt(parseInt(JsonDate.toString().substring(6)).toString()) - parseInt(offsethour.toString()) * 60000;

        ShipDate = new Date(totalmillsecond);
      }
      else {
        let totalmillsecond;
        if (JsonDate.toString().indexOf('+') > 0) {

          let timeoffsetfromservicedate = JsonDate.toString().substring(JsonDate.toString().indexOf('+') + 1, JsonDate.toString().indexOf(')/'));

          let leftoffsethour = parseInt(timeoffsetfromservicedate.toString().substring(0, 2)) * 60;
          let offsethour = parseInt(leftoffsethour.toString()) + parseInt(timeoffsetfromservicedate.toString().substring(2, 4));

          totalmillsecond = parseInt(offset.toString()) * 60000 + parseInt(parseInt(JsonDate.toString().substring(6)).toString()) + parseInt(offsethour.toString()) * 60000;

          ShipDate = new Date(totalmillsecond);
        }
        else {
          totalmillsecond = parseInt(parseInt(JsonDate.toString().substring(6)).toString());


          let utcMonth = new Date(totalmillsecond).getUTCMonth() + 1;
          let utcDay = new Date(totalmillsecond).getUTCDate();
          let utcYear = new Date(totalmillsecond).getUTCFullYear()

          let formatedUtcShipDate = utcMonth + '/' + utcDay + '/' + utcYear;

          ShipDate = new Date(formatedUtcShipDate);
        }

      }

      let getMonth = ShipDate.getMonth() + 1;
      let getDay = ShipDate.getDate();
      let getYear = ShipDate.getFullYear()

      let formatedShipDate = getMonth + '/' + getDay + '/' + getYear;
      return formatedShipDate;
    }
    else {
      return '';
    }

  }

  // SearchModal Open/Close
  openCloseSearchbar(reason: string) {
    if (reason === 'open' || reason === 'search') {
      this.sidenav.open();
    }
    else {
      this.sidenav.close();
    }
  }

  validateCollectionStatus(event: any, code: number) {
  }

  clearSearchbar() {
    if(this.sidenav.mode == "over")
    this.sidenav.close('close');
  }

  searchShipmentLTL() {
    if (this.sidenav.mode == "over")
    {
      this.sidenav.close('close');
    }
    
  }

  prepareSearchShipmentLTLDto() {

  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

}
