import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApplicationStateService } from 'src/app/shared/applicationStateService';
import { Product } from '../Model/Product';
import { ProductState } from '../reducers';
import { loadAllProducts } from '../state/product.action';
import { selectAllProducts } from '../state/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['Edit', 'Description', 'Active', 'Class', 'Hazmat', 'NMFC', 'Weight', 'Group'];
  products = new MatTableDataSource<Product>();
  public products$: Observable<Product[]> = of([])

  @ViewChild(MatPaginator) productPaginator: MatPaginator | any;
  @ViewChild(MatSort) productSort: MatSort | any;
  selectedRowIndex: Product | undefined;
  clientID: number;

  ngAfterViewInit() {
    this.products.paginator = this.productPaginator;
    this.products.sort = this.productSort;
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private store: Store<ProductState>
    , private applicationStateService: ApplicationStateService) {
    this.clientID = 0;
  }

  ngOnInit(): void {
    this.applicationStateService.clientID$.subscribe(cli => {
      this.clientID = (cli === undefined ? 0 : cli)
    });

    this.store.dispatch(loadAllProducts({ clientID: this.clientID }))

    this.products$ = this.store.pipe(
      select(selectAllProducts)
    );

    this.products$.subscribe(p => {
      this.products.data = p;
      this.products.paginator = this.productPaginator;
      this.products.sort = this.productSort;
    })
  }

  EditProduct(selectedProduct: Product) {
    this.SelectData(selectedProduct);
    if (this.selectedRowIndex != null && this.selectedRowIndex != undefined) {
      this.router.navigate(['/productEntryPanel', this.selectedRowIndex.ProductID], {
        relativeTo: this.route,
      });
    }
  }

  SelectData(selectedProduct: Product) {
    this.selectedRowIndex = selectedProduct;
  }

  AddProductClick() {
    this.router.navigate(['/productEntryPanel'], {
      relativeTo: this.route,
    });
  }

}