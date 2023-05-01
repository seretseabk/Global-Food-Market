import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuTileComponent } from './menu-tile/menu-tile.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { FormsModule } from '@angular/forms';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { FilterMenuPipe } from './shared/filter-menu.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MenuTileComponent,
    OrderPageComponent,
    CheckoutPageComponent,
    FilterMenuPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CreditCardDirectivesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
