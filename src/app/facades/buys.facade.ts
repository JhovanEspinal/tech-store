import { BuysModel } from './../models/buys.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as actions from '../store/buys/buys.actions'
import { buysQuery } from '../store/buys/buys.selectors';

@Injectable()
export class BuysFacade{

buys$ = this.store.select(buysQuery.buys);
loading$ = this.store.select(buysQuery.loading);
error$ = this.store.select(buysQuery.error);

constructor(private store: Store<AppState>){}

getAll():void{
    this.store.dispatch(actions.loadBuys());
}

generateBuy(buy: BuysModel):void{
    this.store.dispatch(actions.generateBuy({buy}));
}


}