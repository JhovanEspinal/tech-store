import { BuysFacade } from './../../facades/buys.facade';
import { BuysService } from './../../services/buys.services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './buys.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BuysEffects {
  constructor(
    private actions$: Actions,
    private buysService: BuysService,
    private buysFacade: BuysFacade
  ) {}

  loadBuys$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadBuys),
      mergeMap(() =>
        this.buysService.getBuys().pipe(
          map((buys) => {
            return actions.loadBuysSuccess({
              buys: buys,
            });
          }),
          catchError((error) => of(actions.loadBuysFailure({ error })))
        )
      )
    )
  );
}

