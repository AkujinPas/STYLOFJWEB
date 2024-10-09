import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  viewCart: boolean = false;
  isFixed: boolean = false; // Propiedad para controlar si la barra está fija

  constructor() {}

  ngOnInit(): void {
  }

  // Método para alternar la vista del carrito
  onToggleCart() {
    this.viewCart = !this.viewCart;
  }

  // Método que se llamará al hacer scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Cambia a true si se ha hecho scroll más de 100px, ajusta este valor según sea necesario
    this.isFixed = scrollY > 100;
  }
}
