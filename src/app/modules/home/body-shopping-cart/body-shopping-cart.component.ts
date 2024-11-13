import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-shopping-cart',
  templateUrl: './body-shopping-cart.component.html',
  styleUrls: ['./body-shopping-cart.component.scss']
})
export class BodyShoppingCartComponent {
 
  constructor(private router: Router) { }

  proceedToCheckout() {
    // Navegar a la página de dirección de entrega
    this.router.navigate(['/direccion-entrega']);
  }

  isCartVisible = false;
  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
}

cartItems = []; // Aquí se guardan los productos del carrito
// Método para calcular si debe agregarse la clase para más de 3 productos
get cartBodyClass() {
  return this.cartItems.length > 3 ? 'more-than-3-items' : '';
}

}