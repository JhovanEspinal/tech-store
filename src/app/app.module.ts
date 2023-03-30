import { BuysService } from './services/buys.service';
import { techStoreModule } from './components/tech-store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuysFacade } from './facades/buys.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsArray } from './store/efects';
import { appReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    EffectsModule.forRoot(EffectsArray),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    BuysFacade,
    BuysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
