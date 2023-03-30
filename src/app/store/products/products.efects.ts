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
){}



}