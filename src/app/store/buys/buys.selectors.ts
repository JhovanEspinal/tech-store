import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BuysState } from "./buys.reducer";

const selectBuys = createFeatureSelector<BuysState>('buys');


const buys = createSelector(
    selectBuys,
    (state:BuysState) => state.buys
);

const loading = createSelector(
    selectBuys,
    (state:BuysState) => state.loading
);

const error = createSelector(
    selectBuys,
    (state:BuysState) => state.error
);


export const buysQuery = {
    buys,
    loading,
    error
};