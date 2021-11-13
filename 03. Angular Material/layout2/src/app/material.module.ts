import { NgModule } from "@angular/core";
import{MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'

import { MatFormFieldModule } from "@angular/material/form-field";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    imports:[MatButtonModule ,MatInputModule, MatFormFieldModule , FlexLayoutModule ],
    exports:[MatButtonModule,MatInputModule,MatFormFieldModule,FlexLayoutModule]
})
export class MaterialModule{}
