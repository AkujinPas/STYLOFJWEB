import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { BodyAboutUsComponent } from './body-about-us/body-about-us.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { BodyFashionComponent } from './body-fashion/body-fashion.component';
import { BodyContactComponent } from './body-contact/body-contact.component';
import { BodyShoppingCartComponent } from './body-shopping-cart/body-shopping-cart.component';
import { BodyOfertasComponent } from './body-ofertas/body-ofertas.component';
import { BodyViewProductComponent } from './body-view-product/body-view-product.component';
import { BodySignInComponent } from './body-sign-in/body-sign-in.component';
import { BodySignUpComponent } from './body-sign-up/body-sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoTarjetaComponent } from './pago-tarjeta/pago-tarjeta.component';
import { AnuncioinicioComponent } from './anuncioinicio/anuncioinicio.component';


@NgModule({
  declarations: [
    HomeComponent,
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
    AnuncioinicioComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    HttpClientModule,
    ProductModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
