import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-body-accesories',
  templateUrl: './body-accesories.component.html',
  styleUrls: ['./body-accesories.component.css']
})
export class BodyAccesoriesComponent implements OnInit {
  products: Product[] = [];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })
  }
}

