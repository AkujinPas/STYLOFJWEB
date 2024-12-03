import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressProcessComponent } from './modules/home/address-process/address-process.component';
import { BodyAboutUsComponent } from './modules/home/body-about-us/body-about-us.component';
import { BodyFemaleComponent } from './modules/home/body-female/body-female.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';
import { BodyShoppingCartComponent } from './modules/home/body-shopping-cart/body-shopping-cart.component';
import { HflayoutComponent } from './modules/hflayout/hflayout.component';
import { SimplelayoutComponent } from './modules/simplelayout/simplelayout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardlayoutComponent } from './modules/dashboardlayout/dashboardlayout.component';

const routes: Routes = [
  {
    path: '',
    component: HflayoutComponent, // Componente layout que envuelve las rutas hijas
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a 'inicio'
      { path: 'inicio', component: BodyHomeComponent },
      { path: 'dama', component: BodyFemaleComponent },
      { path: 'carrito', component: BodyShoppingCartComponent },
      { path: 'direccion-entrega', component: AddressProcessComponent },
      { path: 'nosotros', component: BodyAboutUsComponent },
    ],
  },

  {
    path: '', // Rutas con diseño avanzado
    component: DashboardlayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Perfil con header y footer
    ],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutamiento principal con forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }

