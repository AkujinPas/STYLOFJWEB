import { Component } from '@angular/core';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.scss']
})
export class BodyHomeComponent {

  productList = [
    { 
      id: 2,
      name: 'Blusa aqua bordada', 
      image: 'assets/imagenes/fashion/Blusa-bordado-aqua-frente.jpg',
    },
    { 
      id: 3,
      name: 'Camisa larga tropical', 
      image: 'assets/imagenes/fashion/Camisa-larga-azul-frente.jpg',
    },
    { 
      id: 4,
      name: 'Jumper corto con estampado floral', 
      image: 'assets/imagenes/fashion/Jumper-estampado-floral.jpg',
    },
    { 
      id: 5,
      name: 'Jumper estampado rosa', 
      image: 'assets/imagenes/fashion/Jumper-flores-frente.jpg',
    },
    { 
      id: 6,
      name: 'Overol de mezclilla', 
      image: 'assets/imagenes/fashion/Overol-mezclilla-claro.jpg',
    },
    { 
      id: 7,
      name: 'Overol de mezclilla azul', 
      image: 'assets/imagenes/fashion/Overol-mezclilla-oscuro.jpg',
    },
    { 
      id: 8,
      name: 'Vestido ajustado color lila', 
      image: 'assets/imagenes/fashion/Vestido-ajustado-lila.jpg',
    },
    { 
      id: 9,
      name: 'Vestido ajustado color rojo', 
      image: 'assets/imagenes/fashion/Vestido-ajustado-rojo-frente.jpg',
    },
    { 
      id: 10,
      name: 'Vestido azul cielo', 
      image: 'assets/imagenes/fashion/Vestido-azul-cielo-frente.jpg',
    },
    { 
      id: 11,
      name: 'Vestido corto color beige', 
      image: 'assets/imagenes/fashion/Vestido-beige-corto-frente.jpg',
    },
    { 
      id: 12,
      name: 'Vestido estampado de cuadros', 
      image: 'assets/imagenes/fashion/Vestido-cuadros-frente.jpg',
    },
    { 
      id: 13,
      name: 'Vestido multicolor', 
      image: 'assets/imagenes/fashion/Vestido-estampado-colores-frente.jpg',
    },
    { 
      id: 14,
      name: 'Vestido con cuadros azul', 
      image: 'assets/imagenes/fashion/Vestido-estampado-cuadros-frente.jpg',
    },
    { 
      id: 15,
      name: 'Vestido estampado de hoja', 
      image: 'assets/imagenes/fashion/Vestido-estampado-verde-hojas.jpg',
    },
    { 
      id: 16,
      name: 'Vestido largo gris estampado', 
      image: 'assets/imagenes/fashion/Vestido-gris-estampado-largo.jpg',
    },
  ];
  

}

