import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
