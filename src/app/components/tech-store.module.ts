import { BuysContainerComponent } from './buys/buys-container/buys-container.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutesModule } from "./dashboard/dashboard.routing.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ShoopingContainerComponent } from './shooping/shooping-container/shooping-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuysTableComponent } from './buys/buys-table/buys-table.component';


@NgModule({
    declarations: [DashboardComponent, 
      SidenavComponent,
       NabvarComponent,
        ShoopingContainerComponent,
        BuysContainerComponent,
        BuysTableComponent,
      ],
    imports: [
      CommonModule,
      DashboardRoutesModule,
      FlexLayoutModule,

    ],
    exports: [DashboardRoutesModule],
  })
  export class techStoreModule {}
  