import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, pipe } from 'rxjs';
import { isLoggedIn } from './auth/state/auth.selectors';
import { AuthState } from './auth/reducers';
import { Router } from '@angular/router';
import { ApplicationStateService } from './shared/applicationStateService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'layout2';
  @ViewChild('sidenav') sidenav: any;
  isLoggedIn$:Observable<boolean> = of(false);

  constructor(private store: Store<AuthState>,private router:Router,public applicationStateServer:ApplicationStateService) {

  }

  ngOnInit(): void {
    // this.isLoggedIn$=this.store
    //   .pipe(
    //     select(isLoggedIn)
    //   ); 

    this.applicationStateServer.isLoggedIn$.subscribe(a => {
      if(!a)
      {
        this.router.navigate(['login']);
      }
    });


    
  }

  closeSideNav() {
    if (this.sidenav.mode == "over") {
      this.sidenav.close();
    }
  }
}
