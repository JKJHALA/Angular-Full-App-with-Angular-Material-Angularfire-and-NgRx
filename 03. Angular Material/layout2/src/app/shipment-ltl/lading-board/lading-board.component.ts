import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { BOLHDR } from '../model/BOLHDR';
import { ShipmentLTLState } from '../reducers';
import { loadAllShipmentsLTL } from '../state/shipmentLTL.action';
import { selectAllShipmentLTLs } from '../state/shipmentLTL.selector';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ApplicationStateService } from 'src/app/shared/applicationStateService';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-lading-board',
  templateUrl: './lading-board.component.html',
  styleUrls: ['./lading-board.component.css']
})
export class LadingBoardComponent implements OnInit {

  public ShipmentLTLs$: Observable<BOLHDR[]> = of([])

  displayedColumns: string[] = ['Edit', 'ClientLadingNo', 'ProNumber', 'Carrier', 'PickupDate', 'Shipper', 'Consignee', 'Status'];
  ShipmentLTLs = new MatTableDataSource<BOLHDR>();
  @ViewChild(MatPaginator) shipmentLTLpaginator: MatPaginator | any;
  @ViewChild(MatSort) shipmentLTLsort: MatSort | any;
  Selection = new SelectionModel<BOLHDR>(false, []);
  clientID: number;


  constructor(private store: Store<ShipmentLTLState>,
    private router: Router,
    private route: ActivatedRoute,
    private applicationStateService: ApplicationStateService) {
      this.clientID = 0;
     }

  
  ngAfterViewInit() {
    this.ShipmentLTLs.paginator = this.shipmentLTLpaginator;
    this.ShipmentLTLs.sort = this.shipmentLTLsort;
  }

  ngOnInit(): void {

    this.applicationStateService.clientID$.subscribe(cli => {
      this.clientID = (cli === undefined ? 0 : cli)
    });

    this.store.dispatch(loadAllShipmentsLTL({clientID:this.clientID}))

    this.ShipmentLTLs$ = this.store.pipe(
      select(selectAllShipmentLTLs)
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

}
