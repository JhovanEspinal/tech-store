import { ProductModel } from './../../../models/products.model';
import { ProductsFacade } from './../../../facades/product.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-grid',
  templateUrl: './shooping-grid.component.html',
  styleUrls: ['./shooping-grid.component.scss']
})
export class ShoopingGridComponent implements OnInit {

  $products = this.productsFacade.products$
  products: ProductModel[]

  constructor(
    private productsFacade: ProductsFacade
  ){}


  ngOnInit(): void {

    this.$products.subscribe(p =>{
      console.log("p",p)
      this.products = p
    })
  }
}
