import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationAdeptor } from '../locationAdeptor';
import { LocationType } from '../model/location-type.enum';
import { Location } from '../model/location'
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-location-entry-panel',
  templateUrl: './location-entry-panel.component.html',
  styleUrls: ['./location-entry-panel.component.css']
})
export class LocationEntryPanelComponent implements OnInit {

  locationTypes: string[] = ['Origin', 'Destination', 'Bill to', 'All'];
  country: string[] = ['United States of America', 'CANADA', 'Mexico'];
  Times: string[] = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'];

  locationEntryFormGroup: FormGroup = new FormGroup({});

  @Output() saveLocationEvent = new EventEmitter();



  constructor(private locationAdeptor: LocationAdeptor,
    private formBuilder: FormBuilder) {
    this.createLocationForm();
  }

  ngOnInit(): void {

    if (this.locationAdeptor.currentLocation$ != undefined) {
      this.locationAdeptor.currentLocation$.subscribe(l => {
        if (l != undefined) this.displayCurrentLocation(l);
      }
      )
    } //if comp


    this.locationEntryFormGroup.valueChanges
      .pipe(
        debounceTime(1000)).subscribe(
          v => {
            if (this.locationEntryFormGroup.valid)
              this.locationAdeptor.location = { ...v }
          }

        )

  }//init comp


   save()
  {
    console.log("raising ssave location")
    this.saveLocationEvent.emit();
  }

  private displayCurrentLocation(l: Location) {

    //exclaimation to avoide null check error
    this.locationEntryFormGroup.get("LocationId")!.setValue(l.LocationId);
    this.locationEntryFormGroup.get("Name")!.setValue(l.Name);
    this.locationEntryFormGroup.get("Address1")!.setValue(l.Address1);
    this.locationEntryFormGroup.get("Address2")!.setValue(l.Address2);


  }




  createLocationForm() {
    this.locationEntryFormGroup = this.formBuilder.group({
      'LocationId': [null],
      'CountryCode': [''],
      'CountryName': [''],
      'CountryId': [0],
      'PostalCode': [''],
      'PostalID': [0],
      'CityName': [''],
      'CityId': [0],
      'StateCode': [''],
      'StateId': [0],
      'StateName': [''],
      'LocationType': [LocationType.Origin],
      'Name': [''],
      'Address1': [''],
      'Address2': [''],
      'ContactName': [''],
      'ContactPhone': [''],
      'ContactEmail': [''],
      'FaxNumber': [''],
      'PickupDate': [null],
      'ExpectedPickupDate': [null],
      'ExpectedPickupReadyTime': [''],
      'ExpectedPickupCloseTime': [''],
      'PickupReadyTime': [''],
      'PickupCloseTime': [''],
      'DeliveryDate': [null],
      'ExpectedDeliveryDate': [null],
      'ExpectedDeliveryReadyTime': [''],
      'ExpectedDeliveryCloseTime': [''],
      'DeliveryReadyTime': [''],
      'DeliveryCloseTime': [''],
      'PortCodeID': [0],
      'IsValid': [false],
      'PortCode': [''],
      'FiveDigitPortCode': [''],
      'ShortName': [''],
      'ActiveDate': [null],
      'DeActivationDate': [null],
      'IsActive': [true],
      'LocationReference': [''],
      'InboundAccount': [''],
      'OutboundAccount': [''],
      'Notes': [''],
      'Approve': ['Approve'],
      'UnApproved': [false],
      'ContactPhoneExt': ['']
    });
  }



  SaveClick() {



  }
}
