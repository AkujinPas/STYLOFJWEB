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

  onToggleCart() {
    this.viewCart = !this.viewCart;
  }

  // Método que se llamará al hacer scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 0; // Cambia a true si se ha hecho scroll
  }
}
