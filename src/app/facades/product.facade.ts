import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as actions from '../store/products/products.actions'

@Injectable()
export class ProductsFacade{


constructor(private store: Store<AppState>){

}

getAll():void{
    this.store.dispatch(actions.loadProducts());
}


}