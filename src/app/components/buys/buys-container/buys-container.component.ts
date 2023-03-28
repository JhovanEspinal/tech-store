import { BuysFacade } from './../../../facades/buys.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buys-container',
  templateUrl: './buys-container.component.html',
  styleUrls: ['./buys-container.component.less']
})
export class BuysContainerComponent implements OnInit{


  constructor(
    private buysFacade: BuysFacade
  ){}
  ngOnInit(): void {
    this.buysFacade.getAll();
  }




}
