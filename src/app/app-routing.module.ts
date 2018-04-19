import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopPageComponent }   from './shop-page/shop-page.component';
import { AppComponent }  from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: AppComponent },
  { path: 'shop', component: ShopPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}