import { NgModule } from "@angular/core";
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

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
      MatCheckboxModule,
      MatSelectModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatTooltipModule,
      MatMenuModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
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
      MatCheckboxModule,
      MatSelectModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatTooltipModule,
      MatMenuModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
   ]
})
export class MaterialModule { }
