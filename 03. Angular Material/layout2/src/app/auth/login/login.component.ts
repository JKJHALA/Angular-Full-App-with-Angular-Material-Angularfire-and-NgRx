import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../reducers';
import { noop, tap } from 'rxjs';
import { LoadApplicationMenu, LoadBrandInfo, LoadClientDefault, LoadCorporateClientDefault, LoadLoggedClientDetail, login } from '../state/auth.actions';
import { AuthenticationService } from '../services/auth.service';
import { ApplicationStateService } from 'src/app/shared/applicationStateService';
import { clientID } from '../state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  loginFG = new FormGroup({
    loginName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  constructor(private router: Router,
    private authService: AuthenticationService,
    private store: Store<AuthState>
  ) { }

  ngOnInit(): void {
  }

  DoLogin() {
    if (this.loginFG.valid) {
      this.authService.
        doLogin(this.loginFG.value.loginName, this.loginFG.value.password, 'B')
        .pipe(
          tap((userProfile) => {

           this.store.dispatch(
              login({ userProfile: userProfile })
            );

            this.store.dispatch(
              LoadLoggedClientDetail({ clientID: (userProfile.ClientID !== null && userProfile.ClientID !== undefined ? userProfile.ClientID : 0) })
            );

            this.store.dispatch(
              LoadBrandInfo({ clientID: (userProfile.ClientID !== null && userProfile.ClientID !== undefined ? userProfile.ClientID : 0) })
            );

            this.store.dispatch(
              LoadClientDefault({ clientID: (userProfile.ClientID !== null && userProfile.ClientID !== undefined ? userProfile.ClientID : 0) })
            );

            this.store.dispatch(
              LoadCorporateClientDefault({ clientID: (userProfile.ClientID !== null && userProfile.ClientID !== undefined ? userProfile.ClientID : 0) })
            );

            this.store.dispatch(
              LoadApplicationMenu({userID :(userProfile.UserID !== null && userProfile.UserID !== undefined ? userProfile.UserID : 0),clientID:(userProfile.ClientID !== null && userProfile.ClientID !== undefined ? userProfile.ClientID : 0)})
            );

            this.store.pipe(select(clientID)).subscribe(a => this.router.navigateByUrl('/shipment'));
            // this.router.navigateByUrl('/shipment');
          })
        )//pipe closed
        .subscribe(noop)

      //this.router.navigate(['rating']);

    }
  }
}

function userProfile(userProfile: any): import("rxjs").OperatorFunction<import("../Model/userProfile").UserProfile, unknown> {
  throw new Error('Function not implemented.');
}


