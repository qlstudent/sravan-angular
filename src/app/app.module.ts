import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PriceTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
