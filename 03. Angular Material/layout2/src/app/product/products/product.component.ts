import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { loadAllProducts } from '../state/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadAllProducts())

  }

}
