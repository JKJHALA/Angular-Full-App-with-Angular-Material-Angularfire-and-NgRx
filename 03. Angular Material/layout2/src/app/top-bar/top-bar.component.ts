import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left'];  
  public position = new FormControl(this.positionOptions[0]); 

  constructor() { }

  ngOnInit(): void {
  }

}
