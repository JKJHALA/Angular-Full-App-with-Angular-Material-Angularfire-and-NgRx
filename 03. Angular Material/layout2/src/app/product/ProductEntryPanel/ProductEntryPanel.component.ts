import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Product } from '../Model/Product';
import { ProductAdeptor } from '../productAdeptor';

@Component({
  selector: 'app-ProductEntryPanel',
  templateUrl: './ProductEntryPanel.component.html',
  styleUrls: ['./ProductEntryPanel.component.css'],
})
export class ProductEntryPanelComponent implements OnInit {

  classList: string[] = ['50', '55', '60', '65', '70', '77', '85', '92', '100', '110', '125', '150', '175', '200', '250', '300', '400', '500'];

  @Output() saveProductEvent = new EventEmitter();
  productEntryFormGroup: FormGroup = new FormGroup({});

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productAdeptor: ProductAdeptor,
    private formBuilder: FormBuilder) {
      this.createLocationForm()
  }

  ngOnInit() {

    if (this.productAdeptor.currentProduct$ != undefined) {
      this.productAdeptor.currentProduct$.subscribe(p=>{
        if(p !=undefined)
            this.displayCurrentProdut(p);
      })
    }

    this.productEntryFormGroup.valueChanges
    .pipe(
      debounceTime(100)
      ).subscribe(
        pro => {
          if (this.productEntryFormGroup.valid)
            this.productAdeptor.product = { ...pro }
        }
      )
  }

  addProduct() {
    this.saveProductEvent.emit();
  }

  private displayCurrentProdut(p:Product)
  {
    this.productEntryFormGroup.get("Description")!.setValue(p.Description);
    this.productEntryFormGroup.get("Weight")!.setValue(p.Weight);
  }

  closeEnteryPanel() {
    this.router.navigate(['/product'], {
      relativeTo: this.route,
    });
  }

  createLocationForm() {
    this.productEntryFormGroup = this.formBuilder.group({
      'Description': ['', [Validators.required]],
      'Pallet': [''],
      'NMFC': [''],
      'Class': ['50'],
      'Commodity': [''],
      'Hazmat': [false],
      'HazmatContact': [''],
      'Weight': ['', [Validators.required]],
      'Pieces': [''],
      'Lenght': [''],
      'Height': [''],
      'Width': [''],
      'Status': [false],
      'Approve': ['Approve'],
      'UnApproved': [false],
    });
  }

  SaveClick() {

  }
}
