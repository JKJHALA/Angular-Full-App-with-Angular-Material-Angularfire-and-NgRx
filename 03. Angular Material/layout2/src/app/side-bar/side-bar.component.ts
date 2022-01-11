import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../auth/reducers';
import { MaterialModule } from '../material.module';
import { ClientMasterMiniModel } from '../auth/Model/ClientMasterMiniModel';
import { combineLatest, debounceTime, distinctUntilChanged, filter, map, Observable, of, pipe, startWith, switchMap, tap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApplicationStateService } from '../shared/applicationStateService';
import { LoadApplicationMenu, LoadBrandInfo, LoadClientAndSubClientByFilterString, LoadClientDefault, LoadCorporateClientDefault, LoadLoggedClientDetail } from '../auth/state/auth.actions';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  @Output() sidenavOutput: EventEmitter<string> = new EventEmitter();

  selectedClient$: Observable<string | undefined> = of('');
  filteredOptions$: Observable<ClientMasterMiniModel[]> = of();
  clientsForUser$: Observable<ClientMasterMiniModel[]> = of();
  userID: number = 0;


  clientsForm = new FormGroup({
    client: new FormControl('', null)
  })

  constructor(private store: Store<AuthState>, private fb: FormBuilder, public applicationStateService: ApplicationStateService) {

  }

  ngOnInit(): void {

    // this.selectedClient$ = this.store
    //   .pipe(
    //     select(selectedClient)
    //   );

    // this.store.pipe(
    //   select(selectedClient)
    // ).subscribe(client => {
    //   if (!!client) this.clientsForm.get('client')?.setValue(client.ClientName)      
    // });

    this.applicationStateService.selectedClient$.subscribe(client => {
      if (!!client) this.clientsForm.get('client')?.setValue(client.ClientName)
    })

    this.applicationStateService.userID$.subscribe(usr => {
      if (!!usr) this.userID = usr
    })

    this.clientsForm.get('client')?.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      filter((searchStr: string) => searchStr.length >= 3),
      distinctUntilChanged()
    ).subscribe(val => { this.getClientAndSubClientsByFilterName(val) });

    //this.applicationStateService.filteredClientAndSubClient$.subscribe(a => {console.log(a)});
    //this.filteredOptions$ = getCliets$;
  }

  private getClientAndSubClientsByFilterName(searchText: string) {
    this.store.dispatch(
      LoadClientAndSubClientByFilterString({ filterClientName: searchText, clientID: 1, userID: 1 })
    );
  }



  async onChangeClient(event: ClientMasterMiniModel) {
    this.clientsForm.get('client')?.setValue(event.ClientName);

    this.store.dispatch(
      LoadLoggedClientDetail({ clientID: (event.ClientID !== null && event.ClientID !== undefined ? event.ClientID : 0) })
    );

    this.store.dispatch(
      LoadBrandInfo({ clientID: (event.ClientID !== null && event.ClientID !== undefined ? event.ClientID : 0) })
    );

    this.store.dispatch(
      LoadClientDefault({ clientID: (event.ClientID !== null && event.ClientID !== undefined ? event.ClientID : 0) })
    );

    this.store.dispatch(
      LoadCorporateClientDefault({ clientID: (event.ClientID !== null && event.ClientID !== undefined ? event.ClientID : 0) })
    );

    this.store.dispatch(
      LoadApplicationMenu({ userID: this.userID, clientID: (event.ClientID !== null && event.ClientID !== undefined ? event.ClientID : 0) })
    );
  }

  closeSideNavEmit() {
    this.sidenavOutput.emit('');
  }
}


