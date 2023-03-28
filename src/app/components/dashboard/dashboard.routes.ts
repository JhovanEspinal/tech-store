import { ShoopingContainerComponent } from './../shooping/shooping-container/shooping-container.component';
import { Routes } from "@angular/router";
import { BuysContainerComponent } from "../buys/buys-container/buys-container.component";
import { ProductsContainerComponent } from "../products/products-container/products-container.component";

export const dashboardRoutes: Routes = [
    { path: 'products', component:ProductsContainerComponent},
    {path: 'buys', component: BuysContainerComponent},
    {path: 'shopping', component: ShoopingContainerComponent}
  ];
  