import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";

const selectProducts = createFeatureSelector<ProductsState>('products');


const products = createSelector(
    selectProducts,
    (state:ProductsState) => state.products
);

const loading = createSelector(
    selectProducts,
    (state:ProductsState) => state.loading
);

const error = createSelector(
    selectProducts,
    (state:ProductsState) => state.error
);


export const productsQuery = {
    products,
    loading,
    error
};