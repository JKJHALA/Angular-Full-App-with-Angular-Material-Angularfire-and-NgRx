import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { select, Store } from '@ngrx/store';
import { userName } from '../auth/state/auth.selectors';
import { AuthState } from '../auth/reducers';
import { ApplicationStateService } from '../shared/applicationStateService';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left'];  
  public position = new FormControl(this.positionOptions[0]); 
  clientLogoUrl = 'https://devwtcustomer.tmssaas.com/DownloadUserLogo.ashx?ClientID=';
  constructor(private store: Store<AuthState>,public applicationStateService:ApplicationStateService) 
  {


   }

  ngOnInit(): void {
    
  }

}
