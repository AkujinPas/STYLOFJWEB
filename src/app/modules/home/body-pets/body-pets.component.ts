import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-body-pets',
  templateUrl: './body-pets.component.html',
  styleUrls: ['./body-pets.component.css']
})
export class BodyPetsComponent implements OnInit {
  products: Product[] = [];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })
  }
  filterProducts(product: any, category: string): boolean {
    return product.category === category;
    // Puedes agregar más condiciones aquí
  }
}
