import { Action, createReducer, on } from "@ngrx/store";
import { ErrorModel } from "src/app/models/error.model";
import { NotificationModel } from "src/app/models/notification.model";
import { ProductModel } from "src/app/models/products.model";
import * as actions from './products.actions'


export interface ProductsState {
    products: ProductModel[];
    loading: boolean,
    error: ErrorModel,
    notification: NotificationModel
}

export const productsInitialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
    notification: null,
}

export const _productsReducer = createReducer( productsInitialState, 
    on(actions.loadProducts,  state => ({...state,loading: true})),

on(actions.loadProductsSuccess, (state,{products}) =>({
...state,
products:products
})),

on(actions.loadProductsFailure,(state, {error}) => ({
    ...state,
    loading:false,
    error: error,
    notification:null
})),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
    return _productsReducer(state, action);
  }