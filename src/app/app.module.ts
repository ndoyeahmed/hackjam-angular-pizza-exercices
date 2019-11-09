import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {PizzalistComponent} from './pizzalist/pizzalist.component';
import {BasketComponent} from './basket/basket.component';
import {BasketService} from './basket.service';
import {PizzaService} from './pizza.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, PizzalistComponent, BasketComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModalModule],
  exports: [],
  providers: [BasketService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
