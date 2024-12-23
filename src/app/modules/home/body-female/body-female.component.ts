import { Component } from '@angular/core';

@Component({
  selector: 'app-body-female',
  templateUrl: './body-female.component.html',
  styleUrls: ['./body-female.component.css']
})
export class BodyFemaleComponent {

  // Propiedades para la notificación
  showNotification: boolean = false;
  notificationMessage: string = '';

  // Lista de productos
  products = [
    { 
      id: 2,
      name: 'Blusa aqua bordada', 
      price: 39.99, 
      imageF: 'assets/imagenes/female/Blusa-bordado-aqua-frente.jpg',
      imageB: 'assets/imagenes/female/Blusa-bordado-aqua-atras.jpg',
      brand: 'H&M', 
      fabric: 'Poliéster', 
      size: 'L' 
    },
    { 
      id: 3,
      name: 'Camisa larga tropical', 
      price: 49.99, 
      imageF: 'assets/imagenes/female/Camisa-larga-azul-frente.jpg',
      imageB: 'assets/imagenes/female/Camisa-larga-azul-atras.jpg',
      brand: 'Ralph Lauren', 
      fabric:'Lino', 
      size: 'S' 
    },
    { 
      id:4,
      name: 'Jumper talla G, corto con estampado floral y encaje color negro', 
      price: 49.99, 
      imageF: 'assets/imagenes/female/Jumper-estampado-floral.jpg',
      imageB: 'assets/imagenes/female/Jumper-estampado-floral.jpg',
      brand: 'Burberry', 
      fabric: 'Mezcla de Algodón', 
      size: 'M' 
    },
    { 
      id:5,
      name: 'Jumper estampado rosa', 
      price: 49.99, 
      imageF: 'assets/imagenes/female/Jumper-flores-frente.jpg',
      imageB: 'assets/imagenes/female/Jumper-flores-atras.jpg',
      brand: 'H&M', 
      fabric: 'Poliéster', 
      size: 'M' 
    },
    { 
      id:6,
      name: 'Overol de mezclilla', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Overol-mezclilla-claro.jpg',
      imageB: 'assets/imagenes/female/Overol-mezclilla-claro.jpg',
      brand: 'Optima', 
      fabric: 'Mezclilla', 
      size: 'L' 
    },
    { 
      id:7,
      name: 'Overol de mezclilla azul', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Overol-mezclilla-oscuro.jpg',
      imageB: 'assets/imagenes/female/Overol-mezclilla-oscuro.jpg',
      brand: 'Zara', 
      fabric: 'Mezclilla', 
      size: 'L' 
    },
    { 
      id:8,
      name: 'Vestido ajustado color lila', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-ajustado-lila.jpg',
      imageB: 'assets/imagenes/female/Vestido-ajustado-lila.jpg',
      brand: 'Zara', 
      fabric: 'Algodón', 
      size: 'S' 
    },
    { 
      id:9,
      name: 'Vestido ajustado color rojo', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-ajustado-rojo-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-ajustado-rojo-atras.jpg',
      brand: 'Lacoste', 
      fabric: 'Mezcla de Algodón', 
      size: 'M' 
    },
    { 
      id:10,
      name: 'Vestido azul cielo', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-azul-cielo-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-azul-cielo-atras.jpg',
      brand: 'Under Armour', 
      fabric: 'Lino', 
      size: 'M' 
    },
    { 
      id:11,
      name: 'Vestido corto color Beige', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-beige-corto-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-beige-corto-frente.jpg',
      brand: 'Gucci', 
      fabric: 'Poliéster', 
      size: 'M' 
    },
    { 
      id:12,
      name: 'Vestido estampado de cuadros', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-cuadros-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-cuadros-atras.jpg',
      brand: 'Zara', 
      fabric: 'Algodón', 
      size: 'L' 
    },
    { 
      id:13,
      name: 'Vestido multicolor', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-estampado-colores-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-estampado-colores-atras.jpg',
      brand: 'Gucci', 
      fabric: 'Lana', 
      size: 'S' 
    },
    { 
      id:14,
      name: 'Vestido con cuadros azul', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-estampado-cuadros-frente.jpg',
      imageB: 'assets/imagenes/female/Vestido-estampado-cuadros-atras.jpg',
      brand: 'Optima', 
      fabric: 'Mezcla de Algodón', 
      size: 'L' 
    },
    { 
      id:15,
      name: 'Vestido estampado de hoja', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-estampado-verde-hojas.jpg',
      imageB: 'assets/imagenes/female/Vestido-estampado-verde-hojas.jpg',
      brand: 'H&M', 
      fabric: 'Lino', 
      size: 'M' 
    },
    { 
      id:16,
      name: 'Vestido largo gris estampado', 
      price: 29.99, 
      imageF: 'assets/imagenes/female/Vestido-gris-estampado-largo.jpg',
      imageB: 'assets/imagenes/female/Vestido-gris-estampado-largo.jpg',
      brand: 'Optima', 
      fabric: 'Algodón', 
      size: 'S' 
    },
  ];

  // Carrito de compras
  cart: any[] = [];

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

  // Método para agregar el producto al carrito
  addToCart(product: any) {
    this.cart.push(product); // Agrega el producto al carrito
    console.log('Producto añadido al carrito:', product.name);
  
    // Mostrar el mensaje en la notificación
    this.notificationMessage = `${product.name} ha sido añadido al carrito.`;
    this.showNotification = true;
  
    // Cerrar la notificación después de 1.5 segundos
    setTimeout(() => {
      this.showNotification = false;
    }, 2500); // 2.5 segundos visible
  }

  // Método simulado para proceder con la compra
  buyNow(product: any) {
    console.log('Producto comprado:', product.name);
    // Aquí podrías agregar la lógica para proceder con la compra
  }
}
