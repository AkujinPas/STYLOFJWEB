import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressProcessComponent } from './modules/home/address-process/address-process.component';
import { BodyAboutUsComponent } from './modules/home/body-about-us/body-about-us.component';
import { BodyFashionComponent } from './modules/home/body-fashion/body-fashion.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';
import { BodyShoppingCartComponent } from './modules/home/body-shopping-cart/body-shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Redirige la ruta raíz a 'home'
  { path: 'inicio', component: BodyHomeComponent },
  { path: 'carrito', component: BodyShoppingCartComponent },
  { path: 'direccion-entrega', component: AddressProcessComponent },
  { path: 'about-us', component: BodyAboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutamiento principal con forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }

