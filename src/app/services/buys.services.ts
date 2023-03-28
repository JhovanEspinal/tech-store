import { BuysFacade } from './../facades/buys.facade';
import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../components/core/config/app.config';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class BuysService{
        inventoryBaseUrl:string | undefined;

        constructor(
            @Inject(APP_CONFIG) appConfig: AppConfig,
            private http: HttpClient,
            private buysFacade: BuysFacade,
        ){
            this.inventoryBaseUrl = appConfig.inventoryBaseUrl
        }


        getBuys(pageIndex = 1, pageSize = 10): Observable<any>{

            const from = (pageIndex === 1) ? 0 : (((pageIndex - 1) * pageSize));
            const to = from + (pageSize);
        
            return this.http.get(`${this.inventoryBaseUrl}/buys/${from}/${to}`).pipe(
                map((resp: any) => {
                    return resp;
                })
            );
        }























}

