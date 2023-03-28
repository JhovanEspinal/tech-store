import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutesModule } from "./dashboard/dashboard.routing.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ShoopingContainerComponent } from './shooping/shooping-container/shooping-container.component';


@NgModule({
    declarations: [DashboardComponent, SidenavComponent, NabvarComponent, ShoopingContainerComponent,],
    imports: [
      CommonModule,
      DashboardRoutesModule,

    ],
    exports: [DashboardRoutesModule],
  })
  export class techStoreModule {}
  