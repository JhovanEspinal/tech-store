import { ProductModel } from './../../../models/products.model';
import { BuysModel, BuysProduct } from './../../../models/buys.model';
import { BuysFacade } from './../../../facades/buys.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buys-table',
  templateUrl: './buys-table.component.html',
  styleUrls: ['./buys-table.component.scss']
})
export class BuysTableComponent implements OnInit{
    
 buys$ = this.buysFacade.buys$;

 buys :BuysModel[];

  constructor(
    private buysFacade: BuysFacade,
  ){}


  ngOnInit(): void {

   this.buys$.subscribe(b =>{
    this.buys = b
   });
   
  }


  products(buy:BuysModel): BuysProduct[]{
    return buy.products
  }


}
