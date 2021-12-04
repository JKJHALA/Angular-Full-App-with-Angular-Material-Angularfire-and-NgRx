import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { select, Store } from '@ngrx/store';
import { userTicket } from 'app/auth/auth.selectors';
import { AppState } from 'app/reducers';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }


ticket$:Observable<string|undefined>=of('no ticket');


  ngOnInit(): void {
    this.ticket$=this.store
      .pipe(
        select(userTicket)
      )

  }

}
