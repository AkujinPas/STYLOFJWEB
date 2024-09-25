import { Component } from '@angular/core';

@Component({
  selector: 'app-body-fashion',
  templateUrl: './body-fashion.component.html',
  styleUrls: ['./body-fashion.component.css']
})
export class BodyFashionComponent {
  products = [

    { 
      id: 2,
      name: 'Blusa aqua bordada', 
      price: 39.99, 
      imageF: 'assets/imagenes/fashion/Blusa-bordado-aqua-frente.jpg',
      imageB: 'assets/imagenes/fashion/Blusa-bordado-aqua-atras.jpg',
      brand: 'H&M', 
      fabric: 'Poliéster', 
      size: 'L' 
    },
    { 
      id: 3,
      name: 'Camisa larga tropical', 
      price: 49.99, 
      imageF: 'assets/imagenes/fashion/Camisa-larga-azul-frente.jpg',
      imageB: 'assets/imagenes/fashion/Camisa-larga-azul-atras.jpg',
      brand: 'Ralph Lauren', 
      fabric:'Lino', 
      size: 'S' 
    },
    { 
      id:4,
      name: 'Jumper con estampado floral', 
      price: 49.99, 
      imageF: 'assets/imagenes/fashion/Jumper-estampado-floral.jpg',
      imageB: 'assets/imagenes/fashion/Jumper-estampado-floral.jpg',
      brand: 'Burberry', 
      fabric: 'Mezcla de Algodón', 
      size: 'M' 
    },
    { 
      id:5,
      name: 'Jumper estampado rosa', 
      price: 49.99, 
      imageF: 'assets/imagenes/fashion/Jumper-flores-frente.jpg',
      imageB: 'assets/imagenes/fashion/Jumper-flores-atras.jpg',
      brand: 'H&M', 
      fabric: 'Poliéster', 
      size: 'M' 
    },
    { 
      id:6,
      name: 'Overol de mezclilla', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Overol-mezclilla-claro.jpg',
      imageB: 'assets/imagenes/fashion/Overol-mezclilla-claro.jpg',
      brand: 'Optima', 
      fabric: 'Mezclilla', 
      size: 'L' 
    },
    { 
      id:7,
      name: 'Overol de mezclilla azul', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Overol-mezclilla-oscuro.jpg',
      imageB: 'assets/imagenes/fashion/Overol-mezclilla-oscuro.jpg',
      brand: 'Zara', 
      fabric: 'Mezclilla', 
      size: 'L' 
    },
    { 
      id:8,
      name: 'Vestido ajustado color lila', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-ajustado-lila.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-ajustado-lila.jpg',
      brand: 'Zara', 
      fabric: 'Algodón', 
      size: 'S' 
    },
    { 
      id:9,
      name: 'Vestido ajustado color rojo', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-ajustado-rojo-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-ajustado-rojo-atras.jpg',
      brand: 'Lacoste', 
      fabric: 'Mezcla de Algodón', 
      size: 'M' 
    },
    { 
      id:10,
      name: 'Vestido azul cielo', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-azul-cielo-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-azul-cielo-atras.jpg',
      brand: 'Under Armour', 
      fabric: 'Lino', 
      size: 'M' 
    },
    { 
      id:11,
      name: 'Vestido corto color Beige', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-beige-corto-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-beige-corto-frente.jpg',
      brand: 'Gucci', 
      fabric: 'Poliéster', 
      size: 'M' 
    },
    { 
      id:12,
      name: 'Vestido estampado de cuadros', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-cuadros-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-cuadros-atras.jpg',
      brand: 'Zara', 
      fabric: 'Algodón', 
      size: 'L' 
    },
    { 
      id:13,
      name: 'Vestido multicolor', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-estampado-colores-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-estampado-colores-atras.jpg',
      brand: 'Gucci', 
      fabric: 'Lana', 
      size: 'S' 
    },
    { 
      id:14,
      name: 'Vestido con cuadros azul', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-estampado-cuadros-frente.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-estampado-cuadros-atras.jpg',
      brand: 'Optima', 
      fabric: 'Mezcla de Algodón', 
      size: 'L' 
    },
    { 
      id:15,
      name: 'Vestido estampado de hoja', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-estampado-verde-hojas.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-estampado-verde-hojas.jpg',
      brand: 'H&M', 
      fabric: 'Lino', 
      size: 'M' 
    },
    { 
      id:16,
      name: 'Vestido largo gris estampado', 
      price: 29.99, 
      imageF: 'assets/imagenes/fashion/Vestido-gris-estampado-largo.jpg',
      imageB: 'assets/imagenes/fashion/Vestido-gris-estampado-largo.jpg',
      brand: 'Optima', 
      fabric: 'Algodón', 
      size: 'S' 
    },
  ];

  selectedProduct: any = null;

  constructor() {}

  // Método para abrir el modal con los detalles del producto seleccionado
  openModal(product: any) {
    this.selectedProduct = product;
  }

  // Método para cerrar el modal
  closeModal() {
    this.selectedProduct = null;
  }
}