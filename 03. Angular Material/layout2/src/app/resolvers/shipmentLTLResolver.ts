import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, finalize, first, Observable, tap } from "rxjs";
import { AuthState } from "../auth/reducers";
import { clientID } from "../auth/state/auth.selectors";


@Injectable()
export class ShipmentLTLResolver implements Resolve<any>{

loading =false;

  constructor(private store: Store<AuthState>,private router:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store.pipe(
      select(clientID),
      tap(cli => {
        if(cli !== 0 && !this.loading)
        { 
            this.loading=true;
          //navigate on shipment LTL
          this.router.navigateByUrl('/shipment');
        }

      }),
      //filter(coursesLoaded=>coursesLoaded), //only proceed if courseseLoaded flage is set to true
      first(), //purpose is to wait till first value is emitted from above
      finalize(()=>this.loading=false) //just to unflag loading
    );

  }

}