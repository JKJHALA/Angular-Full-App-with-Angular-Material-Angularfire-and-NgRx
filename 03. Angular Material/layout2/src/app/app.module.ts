import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { environment } from 'environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';
import { AuthenticationService } from './auth/auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './system-service/auth.interceptor';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './entity-metadata';


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
    HttpClientModule,
    AuthModule,
    HomeModule,
    ShipmentLTLModule,
    ShipmentTLModule,
    ProductModule,
    LocationModule,
    ReportModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    StoreModule.forRoot({}, {}),
    EntityDataModule.forRoot(entityConfig),


    //StoreModule.forRoot(reducers,{metaReducers}),
    // StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  schemas: [
    //CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpClient,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
