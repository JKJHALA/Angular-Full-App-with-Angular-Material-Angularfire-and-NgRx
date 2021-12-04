import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocationEntityService } from '../services/location-entity.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router: Router,private locationService:LocationEntityService) { }

  ngOnInit(): void {

    this.locationService.getAll();

  }

  AddLocationClick()
  {
    this.router.navigateByUrl('/locationEntryPanel');
  }
}
