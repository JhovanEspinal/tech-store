import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as actions from '../store/products/products.actions'
import { productsQuery } from '../store/products/products.selectors';

@Injectable()
export class ProductsFacade{

products$ = this.store.select(productsQuery.products);
loading$ = this.store.select(productsQuery.loading);
error$ = this.store.select(productsQuery.error);

constructor(private store: Store<AppState>){

}

getAll():void{
    this.store.dispatch(actions.loadProducts());
}


}