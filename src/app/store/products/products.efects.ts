import { ProductsService } from './../../services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as actions from './products.actions';
import { NotificationModel } from './../../models/notification.model';


@Injectable()
export class ProductsEffects {
constructor(
    private actions$: Actions,
    private productsService: ProductsService
){}

loadProducts$ = createEffect(() =>
this.actions$.pipe(
  ofType(actions.loadProducts),
  mergeMap(() =>
    this.productsService.getProducts().pipe(
      map((products) => {
        return actions.loadProductsSuccess({
          products:products,
        });
      }),
      catchError((error) => of(actions.loadProductsFailure({ error })))
    )
  )
)
);


}