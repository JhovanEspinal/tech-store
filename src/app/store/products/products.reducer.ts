import { Action, createReducer, on } from "@ngrx/store";

export interface ProductsState {

}

export const productsInitialState: ProductsState = {

}

export const _productsReducer = createReducer(
    productsInitialState, 

    
)

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return _productsReducer(state, action);
  }