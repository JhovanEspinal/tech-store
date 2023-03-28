import { ActionReducerMap } from '@ngrx/store';
import { buysReducer, BuysState } from './buys/buys.reducer';
import { productsReducer, ProductsState } from './products/products.reducer';


export interface AppState {
    products: ProductsState;
    buys: BuysState;
  }
  
  export const appReducers: ActionReducerMap<AppState> = {
      products: productsReducer,
      buys: buysReducer,
  };    