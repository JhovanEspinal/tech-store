import { NotificationModel } from './../../models/notification.model';
import { ErrorModel } from './../../models/error.model';
import { BuysModel } from './../../models/buys.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './buys.actions'

export interface BuysState {
  buys: BuysModel[];
  loading: boolean,
  error: ErrorModel,
  notification: NotificationModel
}

export const buysInitialState: BuysState = {
  buys: [],
  loading: false,
  error: null,
  notification: null,
};

export const _buysReducer = createReducer(buysInitialState,

on(actions.loadBuys,  state => ({...state,loading: true})),

on(actions.loadBuysSuccess, (state,{buys}) =>({
...state,
buys:buys
})),

on(actions.loadBuysFailure,(state, {error}) => ({
    ...state,
    loading:false,
    error: error,
    notification:null
})),
);

export function buysReducer(state: BuysState | undefined, action: Action) {
  return _buysReducer(state, action);
}
