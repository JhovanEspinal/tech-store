import { ErrorModel } from './../../models/error.model';
import { BuysModel } from './../../models/buys.model';
import { createAction, props } from "@ngrx/store";

export const loadBuys = createAction("[Buys] load Buys");

export const loadBuysSuccess = createAction(
    "[Buys] load Buys Success",
    props<{
        buys:BuysModel[]
    }>()
);

export const loadBuysFailure = createAction(
    "[Buys] load Buys Failure",
    props<{error:ErrorModel}>()
);