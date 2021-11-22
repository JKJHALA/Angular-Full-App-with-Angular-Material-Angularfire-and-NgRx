import { NgModule } from "@angular/core";
import{MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'

import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav"
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports:[MatButtonModule ,MatInputModule, MatFormFieldModule ,
       FlexLayoutModule, MatSidenavModule ,MatListModule ,MatIconModule,
       MatToolbarModule , MatCardModule],
    exports:[MatButtonModule,MatInputModule,MatFormFieldModule,
      FlexLayoutModule,     MatSidenavModule, MatListModule,MatIconModule,
      MatToolbarModule,MatCardModule]
})
export class MaterialModule{}MatSidenavModule
