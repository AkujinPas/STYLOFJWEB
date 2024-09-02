import { Component } from '@angular/core';

@Component({
  selector: 'app-body-fashion',
  templateUrl: './body-fashion.component.html',
  styleUrls: ['./body-fashion.component.css']
})
export class BodyFashionComponent {
  products = [
    { 
      name: 'Blusa beige con flores', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Blusa-beige-flores.jpg',
      brand: 'Marca: Zara', 
      fabric: 'Tela: Algodón', 
      size: 'Talla: M' 
    },
    { 
      name: 'Blusa aqua bordada', 
      price: 39.99, 
      image: 'assets/imagenes/fashion/Blusa-bordado-aqua-frente.jpg',
      brand: 'Marca: H&M', 
      fabric: 'Tela: Poliéster', 
      size: 'Talla: L' 
    },
    { 
      name: 'Camisa larga tropical', 
      price: 49.99, 
      image: 'assets/imagenes/fashion/Camisa-larga-azul-frente.jpg',
      brand: 'Marca: Ralph Lauren', 
      fabric:'Tela: Lino', 
      size: 'Talla: S' 
    },
    { 
      name: 'Jumper con estampado floral', 
      price: 49.99, 
      image: 'assets/imagenes/fashion/Jumper-estampado-floral.jpg',
      brand: 'Marca: Burberry', 
      fabric: 'Tela: Mezcla de Algodón', 
      size: 'Talla: M' 
    },
    { 
      name: 'Jumper con estampado floral rosa', 
      price: 49.99, 
      image: 'assets/imagenes/fashion/Jumper-flores-frente.jpg',
      brand: 'Marca: H&M', 
      fabric: 'Tela: Poliéster', 
      size: 'Talla: M' 
    },
    { 
      name: 'Overol de mezclilla', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Overol-mezclilla-claro.jpg',
      brand: 'Marca: Optima', 
      fabric: 'Tela: Mezclilla', 
      size: 'Talla: L' 
    },
    { 
      name: 'Overol de mezclilla azul', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Overol-mezclilla-oscuro.jpg',
      brand: 'Marca: Zara', 
      fabric: 'Tela: Mezclilla', 
      size: 'Talla: L' 
    },
    { 
      name: 'Vestido ajustado color lila', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-ajustado-lila.jpg',
      brand: 'Marca: Zara', 
      fabric: 'Tela: Algodón', 
      size: 'Talla: S' 
    },
    { 
      name: 'Vestido ajustado color rojo', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-ajustado-rojo-frente.jpg',
      brand: 'Marca: Lacoste', 
      fabric: 'Tela: Mezcla de Algodón', 
      size: 'Talla: M' 
    },
    { 
      name: 'Vestido azul cielo', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-azul-cielo-frente.jpg',
      brand: 'Marca: Under Armour', 
      fabric: 'Tela: Lino', 
      size: 'Talla: M' 
    },
    { 
      name: 'Vestido corto color Beige', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-beige-corto-frente.jpg',
      brand: 'Marca: Gucci', 
      fabric: 'Tela: Poliéster', 
      size: 'Talla: M' 
    },
    { 
      name: 'Vestido con estampado de cuadros', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-cuadros-frente.jpg',
      brand: 'Marca: Zara', 
      fabric: 'Tela: Algodón', 
      size: 'Talla: L' 
    },
    { 
      name: 'Vestido multicolor', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-estampado-colores-frente.jpg',
      brand: 'Marca: Gucci', 
      fabric: 'Tela: Lana', 
      size: 'Talla: S' 
    },
    { 
      name: 'Vestido con cuadros azul', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-estampado-cuadros-frente.jpg',
      brand: 'Marca: Optima', 
      fabric: 'Tela: Mezcla de Algodón', 
      size: 'Talla: L' 
    },
    { 
      name: 'Vestido estampado de hoja', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-estampado-verde-hojas.jpg',
      brand: 'Marca: H&M', 
      fabric: 'Tela: Lino', 
      size: 'Talla: M' 
    },
    { 
      name: 'Vestido largo gris estampado', 
      price: 29.99, 
      image: 'assets/imagenes/fashion/Vestido-gris-estampado-largo.jpg',
      brand: 'Marca: Optima', 
      fabric: 'Tela: Algodón', 
      size: 'Talla: S' 
    },
  ];

  constructor() {}
}
