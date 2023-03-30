import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from 'src/app/facades/product.facade';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  

  
  constructor(
    private productsFacade: ProductsFacade
  ){

  }
  ngOnInit(): void {
 this.productsFacade.getAll();
  }



}
