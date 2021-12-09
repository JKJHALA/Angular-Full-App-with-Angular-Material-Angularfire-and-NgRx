import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-entry-panel',
  templateUrl: './location-entry-panel.component.html',
  styleUrls: ['./location-entry-panel.component.css']
})
export class LocationEntryPanelComponent implements OnInit {

  locationTypes: string[] = ['Origin', 'Destination', 'Bill to', 'All'];
  country: string[] = ['United States of America', 'CANADA', 'Mexico'];
  Times: string[] = ['09:00 AM', '09:30 AM', '10:00 AM','10:30 AM'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
