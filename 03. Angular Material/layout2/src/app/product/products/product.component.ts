import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  displayedColumns: string[] = ['Edit','Description', 'Active', 'Class', 'Hazmat','NMFC','Weight','Group'];

  products = new MatTableDataSource<ProductModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  selectedRowIndex:string | undefined;

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
    this.products.sort = this.sort;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AddProductClick()
  {
    this.router.navigateByUrl('/productEntryPanel');   
  }  

  SelectData(selectedProduct:ProductModel)
  {
    this.selectedRowIndex=selectedProduct.Description;    
  }

}

export interface ProductModel {
  Description: string,
  Active: boolean,
  Class: string,
  Hazmat: boolean,
  NMFC: string,
  Weight: number,
  Group: string
}

const ELEMENT_DATA: ProductModel[] = [
  { Description: 'PRODUCT LINE 1', Active: true, Class: '50', Hazmat: false, NMFC: '123456-78', Weight: 500, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 2', Active: false, Class: '55', Hazmat: true, NMFC: '123456-78', Weight: 600, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 3', Active: true, Class: '60', Hazmat: false, NMFC: '123456-78', Weight: 700, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 4', Active: false, Class: '65', Hazmat: true, NMFC: '123456-78', Weight: 800, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 5', Active: true, Class: '70', Hazmat: false, NMFC: '123456-78', Weight: 900, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 6', Active: false, Class: '77', Hazmat: true, NMFC: '123456-78', Weight: 1000, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 7', Active: true, Class: '85', Hazmat: false, NMFC: '123456-78', Weight: 1100, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 8', Active: false, Class: '92', Hazmat: true, NMFC: '123456-78', Weight: 1200, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 9', Active: true, Class: '100', Hazmat: false, NMFC: '123456-78', Weight: 1300, Group: 'STANDARD' },
  { Description: 'PRODUCT LINE 10', Active: false, Class: '110', Hazmat: true, NMFC: '123456-78', Weight: 1400, Group: 'STANDARD' },
];

