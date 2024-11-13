import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BodyShoppingCartComponent } from './body-shopping-cart/body-shopping-cart.component';
import { AddressProcessComponent } from './address-process/address-process.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrito', component: BodyShoppingCartComponent },
  { path: 'direccion-entrega', component: AddressProcessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
