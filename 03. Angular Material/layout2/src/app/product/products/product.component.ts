import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { loadAllProducts } from '../state/product.action';
import { selectAllProducts } from '../state/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
       ) { }

     public  products$:Observable<Product[]>=of([])
     displayedColumns: string[] = ['ProductID', 'Description'];

  ngOnInit(): void {

    this.store.dispatch(loadAllProducts())

    //pipe thro store and use selector funtion
    this.products$= this.store.pipe(
      select(selectAllProducts)
    )

  }

  addEditClick():void{

  }

}
