import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  displayedColumns: string[] = ['ShortName', 'Name', 'Active', 'Country','State','City','Postal','Group','LocationType'];
  locations: LocationModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    const ELEMENT_DATA: LocationModel[] = [
      {ShortName: '00001', Name: 'LOCATION-00001', Active: true, Country: 'United States Of America',
      State:'GA',City:'ATLANTA',Postal:'30303',Group:'STANDARD',LocationType:'Origin'},

      {ShortName: '00002', Name: 'LOCATION-00002', Active: true, Country: 'United States Of America',
      State:'IL',City:'CHICAGO',Postal:'60606',Group:'STANDARD',LocationType:'Destination'},

      {ShortName: '00003', Name: 'LOCATION-00003', Active: true, Country: 'United States Of America',
      State:'PA',City:'PITTSBURGH',Postal:'15237',Group:'STANDARD',LocationType:'Bill To'},

      {ShortName: '00004', Name: 'LOCATION-00004', Active: true, Country: 'United States Of America',
      State:'NY',City:'ACORD',Postal:'12404',Group:'STANDARD',LocationType:'All'},

      {ShortName: '00005', Name: 'LOCATION-00005', Active: true, Country: 'United States Of America',
      State:'TN',City:'MEMPHIS',Postal:'38119',Group:'STANDARD',LocationType:'Origin'},
     
    ];

    this.locations = ELEMENT_DATA;

  }

  AddLocationClick()
  {
    this.router.navigateByUrl('/locationEntryPanel');   
  }
}

export interface LocationModel {
  ShortName: string;
  Name: string;
  Active: boolean;
  Country: string;
  State: string;
  City: string;
  Postal: string;
  Group: string;
  LocationType: string;
}
