import { ErrorModel } from './../../models/error.model';
import { createAction, props } from "@ngrx/store";
import { ProductModel } from 'src/app/models/products.model';

export const loadProducts = createAction("[Products] load Products");

export const loadProductsSuccess = createAction(
    "[Products] load Products Success",
    props<{
        products:ProductModel[]
    }>()
);

export const loadProductsFailure = createAction(
    "[Products] load Product Failure",
    props<{err:ErrorModel}>()
);