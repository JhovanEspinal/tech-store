import { NotificationModel } from './../../models/notification.model';
import { BuysService } from '../../services/buys.service';
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

  generateBuy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.generateBuy),
      mergeMap((data) => this.buysService.generateBuy(data.buy).pipe(
        map(() =>{
            const notification: NotificationModel = {
              title: "Compra Exitosa",
              type: "success",
              message: "La compra se genero de manera exitosa"
            };

            return actions.generateBuySuccess({notification});
        }),
        catchError((error) => of(actions.generateBuyFailure({error})))
      )
      )
    )
  );
}
