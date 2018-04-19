import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SearchResultComponent } from './shop-page/search-result/search-result.component';
import { SidebarComponent } from './shop-page/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShopPageComponent,
    SearchResultComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
