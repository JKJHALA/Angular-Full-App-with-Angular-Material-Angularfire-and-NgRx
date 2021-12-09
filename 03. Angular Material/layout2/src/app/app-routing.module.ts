import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignupComponent } from './signup/signup.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TpageComponent } from './tpage/tpage.component';
import { RatingComponent } from './home/rating/rating.component';
import { LadingBoardComponent } from './shipment-ltl/lading-board/lading-board.component';
import { LadingBoardTLComponent } from './shipment-tl/lading-board-tl/lading-board-tl.component';
import { ProductComponent } from './product/products/product.component';
import { LocationsComponent } from './location/locations/locations.component';
import { LocationEntryPanelComponent } from './location/location-entry-panel/location-entry-panel.component';
import { ReportsComponent } from './report/reports/reports.component';
import { LocationContainerComponent } from './location/location-container/location-container.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'side', component: SideBarComponent },
  { path: 'top', component: TopBarComponent },
  { path: 'tpage', component: TpageComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'shipment', component: LadingBoardComponent },
  { path: 'shipmentTL', component: LadingBoardTLComponent },
  { path: 'product', component: ProductComponent },
  { path: 'location', component: LocationsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'addEditlocation/:locationId', component: LocationContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
