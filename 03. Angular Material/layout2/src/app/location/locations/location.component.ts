import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AddLocationClick()
  {
    this.router.navigateByUrl('/locationEntryPanel');   
  }
}
