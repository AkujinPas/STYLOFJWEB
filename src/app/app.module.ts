import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './modules/home/product/product.module';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './modules/home/footer/footer.component';
import { HeaderComponent } from './modules/home/header/header.component';
import { BodyAboutUsComponent } from './modules/home/body-about-us/body-about-us.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';
import { BodyFashionComponent } from './modules/home/body-fashion/body-fashion.component';
import { BodyContactComponent } from './modules/home/body-contact/body-contact.component';
import { BodyShoppingCartComponent } from './modules/home/body-shopping-cart/body-shopping-cart.component';
import { BodyOfertasComponent } from './modules/home/body-ofertas/body-ofertas.component';
import { BodyViewProductComponent } from './modules/home/body-view-product/body-view-product.component';
import { BodySignInComponent } from './modules/home/body-sign-in/body-sign-in.component';
import { BodySignUpComponent } from './modules/home/body-sign-up/body-sign-up.component';
import { InicioSesionComponent } from './modules/home/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './modules/home/registro-usuario/registro-usuario.component';
import { CarritoComponent } from './modules/home/carrito/carrito.component';
import { PagoTarjetaComponent } from './modules/home/pago-tarjeta/pago-tarjeta.component';
import { AnuncioinicioComponent } from './modules/home/anuncioinicio/anuncioinicio.component';
import { PaymentProcessComponent } from './modules/home/payment-process/payment-process.component';
import { AddressProcessComponent } from './modules/home/address-process/address-process.component';
import { PaymentStatusComponent } from './modules/home/payment-status/payment-status.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';
import { IndexComponent } from './modules/home/product/index/index.component';
import { CreateComponent } from './modules/home/product/create/create.component';
import { ProductRoutingModule } from './modules/home/product/product-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyAboutUsComponent,
    BodyHomeComponent,
    BodyFashionComponent,
    BodyContactComponent,
    BodyShoppingCartComponent,
    BodyOfertasComponent,
    BodyViewProductComponent,
    BodySignInComponent,
    BodySignUpComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    CarritoComponent,
    PagoTarjetaComponent,
    AnuncioinicioComponent,
    PaymentProcessComponent,
    AddressProcessComponent,
    PaymentStatusComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
