import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-body-shoes',
  templateUrl: './body-shoes.component.html',
  styleUrls: ['./body-shoes.component.css']
})
export class BodyShoesComponent implements OnInit {
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
