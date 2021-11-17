import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignupComponent } from './signup/signup.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TpageComponent } from './tpage/tpage.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path: 'signUp', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'side',component: SideBarComponent},
{path:'top', component:TopBarComponent},
{path: 'tpage',component:TpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
