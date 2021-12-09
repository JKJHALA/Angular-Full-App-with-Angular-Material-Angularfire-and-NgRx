import { Component, OnInit } from '@angular/core';
import { LocationAdeptor } from '../locationAdeptor';

@Component({
  selector: 'app-location-entry-panel',
  templateUrl: './location-entry-panel.component.html',
  styleUrls: ['./location-entry-panel.component.css']
})
export class LocationEntryPanelComponent implements OnInit {

  constructor(
    private locationAdeptor: LocationAdeptor

  ) { }

  ngOnInit(): void {



  }

}
