import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApplicationStateService } from 'src/app/shared/applicationStateService';
import { ProductAdeptor } from '../productAdeptor';
import { ProductState } from '../reducers';
import { addProduct } from '../state/product.action';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  providers: [ProductAdeptor],
})
export class ProductContainerComponent implements OnInit {
  clientID: number;
  
  constructor(private productAdeptor: ProductAdeptor,
    private store: Store<ProductState>,
    private applicationStateService: ApplicationStateService,
    private router: Router,
    private route: ActivatedRoute,) { 
      this.clientID = 0;
    }

  ngOnInit(): void {
    this.applicationStateService.clientID$.subscribe(cli => {
      this.clientID = (cli === undefined ? 0 : cli)
    });
  }

  saveProduct()
  { 
    console.log(this.productAdeptor.product?.Class);
    if(this.productAdeptor.product != null)
    {
      this.productAdeptor.product.ClientID = this.clientID;
      this.store.dispatch(addProduct({ newProduct : this.productAdeptor.product  }));
      
      this.router.navigate(['/product'], {
        relativeTo: this.route,
      });
    }
  }

}
