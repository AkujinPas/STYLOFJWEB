import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyShoppingCartComponent } from './modules/home/body-shopping-cart/body-shopping-cart.component';
import { AddressProcessComponent } from './modules/home/address-process/address-process.component';

const routes: Routes = [
  {path:"home", loadChildren:()=>import("./modules/home/home.module").then(m=>m.HomeModule)},
  { path: 'carrito', component: BodyShoppingCartComponent },
  { path: 'direccion-entrega', component: AddressProcessComponent },
  { path: '', redirectTo: '/carrito', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', redirectTo: '/carrito' } // Ruta de respaldo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
