import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TpageComponent } from './tpage/tpage.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ShipmentLTLModule } from './shipment-ltl/shipment-ltl.module';
import { ShipmentTLModule } from './shipment-tl/shipment-tl.module';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';
import { ReportModule } from './report/report.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './auth/services/auth.service';
import { AuthInterceptor } from './system-service/auth-interceptor';
import { ApplicationStateService } from './shared/applicationStateService';
import { ClientMasterMiniService } from './client/services/clientMasterMini.service';
import { clientModule } from './client/client.module';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TopBarComponent,
    SideBarComponent,
    TpageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HomeModule,
    ShipmentLTLModule,
    ShipmentTLModule,
    ProductModule,
    LocationModule,
    ReportModule,
    clientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    //EntityDataModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot([]),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpClient,
    AuthenticationService,
    ApplicationStateService,
    ClientMasterMiniService,

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
