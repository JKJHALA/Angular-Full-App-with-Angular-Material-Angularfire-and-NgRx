import { NgModule  } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav"
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatTableModule} from '@angular/material/table'

@NgModule({
   imports: [MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatNativeDateModule,
    // MatMomentDateModule,
      MatCheckboxModule,
      MatSelectModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatTableModule
   ],
   exports: [MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatNativeDateModule,
     // MatMomentDateModule,
      MatCheckboxModule,
      MatSelectModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatTableModule
   ]
})
export class MaterialModule { }
