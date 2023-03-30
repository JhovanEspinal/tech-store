
import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../components/core/config/app.config';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ProductsService{
        inventoryBaseUrl:string | undefined;

        constructor(
            @Inject(APP_CONFIG) appConfig: AppConfig,
            private http: HttpClient,
        ){
            this.inventoryBaseUrl = appConfig.inventoryBaseUrl
        }

        getProducts(pageIndex = 1, pageSize = 10): Observable<any>{

            const from = (pageIndex === 1) ? 0 : (((pageIndex - 1) * pageSize));
            const to = from + (pageSize);
        
            return this.http.get(`${this.inventoryBaseUrl}/products/${from}/${to}`).pipe(
                map((resp: any) => {
                    return resp;
                })
            );
        }
    }