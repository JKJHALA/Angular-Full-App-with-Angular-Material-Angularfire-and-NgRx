import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { noop, tap } from 'rxjs';
import { login } from '../auth.actions';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFG = new FormGroup({


    loginName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private router: Router,
    private authService: AuthenticationService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  DoLogin() {
    if (this.loginFG.valid) {



      this.authService.
      doLogin(this.loginFG.value.loginName, this.loginFG.value.password, 'B')
        .pipe(
          tap((userProfile) => {
            console.log(userProfile)
            this.store.dispatch(
              login({ userProfile: userProfile })
            );
            this.router.navigateByUrl('/location');
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

