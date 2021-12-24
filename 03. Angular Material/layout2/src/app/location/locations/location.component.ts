import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  displayedColumns: string[] = ['Edit','ShortName', 'Name', 'Active', 'Country','State','City','Postal','Group','LocationType'];
  
  locations = new MatTableDataSource<LocationModel>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  Selection = new SelectionModel<LocationModel>(false, []);
  
  
  ngAfterViewInit() {
    this.locations.paginator = this.paginator;
    this.locations.sort = this.sort;    
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
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

const ELEMENT_DATA : LocationModel[] = [
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

  {ShortName: '00006', Name: 'LOCATION-00006', Active: true, Country: 'United States Of America',
  State:'GA',City:'ATLANTA',Postal:'30303',Group:'STANDARD',LocationType:'Origin'},

  {ShortName: '00007', Name: 'LOCATION-00007', Active: true, Country: 'United States Of America',
  State:'IL',City:'CHICAGO',Postal:'60606',Group:'STANDARD',LocationType:'Destination'},

  {ShortName: '00008', Name: 'LOCATION-00008', Active: true, Country: 'United States Of America',
  State:'PA',City:'PITTSBURGH',Postal:'15237',Group:'STANDARD',LocationType:'Bill To'},

  {ShortName: '00009', Name: 'LOCATION-00009', Active: true, Country: 'United States Of America',
  State:'NY',City:'ACORD',Postal:'12404',Group:'STANDARD',LocationType:'All'},

  {ShortName: '00010', Name: 'LOCATION-00010', Active: true, Country: 'United States Of America',
  State:'TN',City:'MEMPHIS',Postal:'38119',Group:'STANDARD',LocationType:'Origin'},
 
];

