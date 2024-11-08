
import { Component, Input, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-anuncioinicio',
  templateUrl: './anuncioinicio.component.html',
  styleUrls: ['./anuncioinicio.component.scss']
})
export class AnuncioinicioComponent implements OnInit {
  @Input() products: Product[] = []; // Recibe la lista de productos
  selectedProduct: Product | undefined; // Producto seleccionado aleatoriamente
  showPopup = true; // Controla la visibilidad del popup

  ngOnInit() {
    this.selectRandomProduct();
  }

  selectRandomProduct() {
    if (this.products.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.products.length);
      this.selectedProduct = this.products[randomIndex];
    }
  }

  closePopup() {
    this.showPopup = false;
  }


  viewProduct() {
    // Lógica adicional si quieres redirigir o mostrar detalles del producto
    console.log('Ver producto:', this.selectedProduct);
    this.closePopup();
  }
}
